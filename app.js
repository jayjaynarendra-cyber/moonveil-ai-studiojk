const $=id=>document.getElementById(id);
let mode='text';
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{mode=btn.dataset.mode;document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b===btn));$('imageInput').classList.toggle('hidden',mode!=='image');}));
$('authBtn').onclick=()=>$('authModal').classList.remove('hidden');
$('closeModal').onclick=()=>$('authModal').classList.add('hidden');
$('buyBtn').onclick=()=>alert('Payment checkout is not connected yet. Configure a payment provider before selling credits.');
$('generateBtn').onclick=()=>{const prompt=$('prompt').value.trim();if(!prompt){$('notice').textContent='Please describe the video you want to create.';return;}if(mode==='image'&&!$('reference').files.length){$('notice').textContent='Please choose a reference image first.';return;}$('result').classList.remove('hidden');$('result').textContent='Your project request is ready. Connect a cloud video-generation API and secure server-side credit checks to enable real generation.';};
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));
