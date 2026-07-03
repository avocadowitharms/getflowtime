/**
 * SocialImporter
 * Abstraction layer to detect platform, parse URLs, extract post IDs, and generate placeholder draft objects.
 */
const SocialImporter = {
  parseSafeUrl(url) {
    if (!url) return null;
    try {
      const parsed = new URL(url.trim());
      return parsed.protocol === 'http:' || parsed.protocol === 'https:' ? parsed : null;
    } catch (e) {
      return null;
    }
  },

  hostnameMatches(hostname, domains) {
    return domains.some(domain => hostname === domain || hostname.endsWith(`.${domain}`));
  },

  /**
   * Detects the social platform from a URL.
   * @param {string} url 
   * @returns {string} One of: 'x', 'threads', 'instagram', 'bluesky', 'linkedin', 'manual'
   */
  detectPlatform(url) {
    const parsedUrl = this.parseSafeUrl(url);
    if (!parsedUrl) return 'manual';
    const hostname = parsedUrl.hostname.toLowerCase();
    if (this.hostnameMatches(hostname, ['x.com', 'twitter.com'])) {
      return 'x';
    }
    if (this.hostnameMatches(hostname, ['threads.net'])) {
      return 'threads';
    }
    if (this.hostnameMatches(hostname, ['instagram.com'])) {
      return 'instagram';
    }
    if (this.hostnameMatches(hostname, ['bsky.app'])) {
      return 'bluesky';
    }
    if (this.hostnameMatches(hostname, ['linkedin.com'])) {
      return 'linkedin';
    }
    return 'manual';
  },

  /**
   * Extracts the external post ID from the URL.
   * @param {string} url 
   * @returns {string|null} The post ID or null if not extractable
   */
  extractExternalPostId(url) {
    if (!url) return null;
    const platform = this.detectPlatform(url);
    try {
      const parsedUrl = this.parseSafeUrl(url);
      if (!parsedUrl) return null;
      const pathname = parsedUrl.pathname;

      switch (platform) {
        case 'x': {
          // Format: /username/status/123456...
          const match = pathname.match(/\/status\/(\d+)/);
          return match ? match[1] : null;
        }
        case 'threads': {
          // Format: /@username/post/C7v8a9bC... or /post/C7v8a9bC...
          const match = pathname.match(/\/post\/([a-zA-Z0-9_-]+)/);
          return match ? match[1] : null;
        }
        case 'instagram': {
          // Format: /p/C7v8a9bC... or /reel/C7v8a9bC...
          const match = pathname.match(/\/(?:p|reel)\/([a-zA-Z0-9_-]+)/);
          return match ? match[1] : null;
        }
        case 'bluesky': {
          // Format: /profile/username.bsky.social/post/3ksdj4ksd2...
          const match = pathname.match(/\/post\/([a-zA-Z0-9]+)/);
          return match ? match[1] : null;
        }
        case 'linkedin': {
          // Formats:
          // - /posts/activity-1234567890...
          // - /feed/update/urn:li:activity:1234567890...
          // - /feed/update/urn:li:share:1234567890...
          const activityMatch = pathname.match(/(?:activity-|update\/urn:li:activity:)(\d+)/);
          if (activityMatch) return activityMatch[1];
          
          const shareMatch = pathname.match(/(?:share:)(\d+)/);
          if (shareMatch) return shareMatch[1];
          
          // Fallback check query params for share id or similar
          const urnParam = parsedUrl.searchParams.get('urn');
          if (urnParam) {
            const urnMatch = urnParam.match(/urn:li:(?:activity|share):(\d+)/);
            if (urnMatch) return urnMatch[1];
          }
          return null;
        }
        default:
          return null;
      }
    } catch (e) {
      console.error('Failed to parse URL for external post ID:', e);
      return null;
    }
  },

  /**
   * Creates a draft Update object from a URL.
   * @param {string} url 
   * @returns {object} The initial Update draft structure
   */
  createDraftFromUrl(url) {
    const parsedUrl = this.parseSafeUrl(url);
    const platform = this.detectPlatform(url);
    const externalId = this.extractExternalPostId(url);
    const id = 'update_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    // Nicely formatted platform title
    const formattedPlatform = platform === 'x' ? 'X' : platform.charAt(0).toUpperCase() + platform.slice(1);
    const title = `New Update from ${formattedPlatform}`;
    
    // Auto-generated slug
    const timestampSuffix = Date.now().toString().slice(-6);
    const cleanId = externalId ? externalId : timestampSuffix;
    const slug = `update-from-${platform}-${cleanId}`;
    
    return {
      id,
      title,
      slug,
      description: "",
      body: "",
      platform,
      originalUrl: parsedUrl ? parsedUrl.href : url.trim(),
      externalPostId: externalId,
      thumbnailUrl: platform === 'instagram' && externalId ? `https://images.weserv.nl/?url=https%3A%2F%2Fwww.instagram.com%2Fp%2F${externalId}%2Fmedia%2F%3Fsize%3Dl` : null,
      tags: [platform === 'manual' ? 'update' : platform],
      status: 'imported',
      publishedAt: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
};

// Export to window object for browser access
window.SocialImporter = SocialImporter;
