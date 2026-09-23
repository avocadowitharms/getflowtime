document.querySelectorAll('[data-learn-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-learn-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 let count=0;document.querySelectorAll('[data-topic]').forEach(card=>{card.hidden=button.dataset.learnFilter!=='All'&&card.dataset.topic!==button.dataset.learnFilter;if(!card.hidden)count++;});
 document.querySelector('[data-learn-count]').textContent=`${count} articles`;
}));
