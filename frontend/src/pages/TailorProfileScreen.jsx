import React from 'react';

export default function TailorProfileScreen() {
  return (
    <>
<header className="w-full top-0 sticky z-50 bg-[#f4f4f2] dark:bg-neutral-800 flex justify-between items-center px-6 py-4 w-full flat no shadows">
<div className="flex items-center gap-4">
<button className="text-[#755b00] dark:text-[#C9A84C] hover:opacity-80 transition-opacity active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 className="font-['Be_Vietnam_Pro'] font-bold text-lg dark:text-white">مرحباً، محمد</h1>
</div>
<div className="w-10 h-10 rounded-full overflow-hidden bg-[#FAFAF8]-container-high ring-2 ring-primary-container/20">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="professional male user profile photo in a minimalist studio setting with warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4-qvyQ52grpLfsr3ZCiwbOBArjn56ucueBF1usY5Jqq22ZXrKOxGfgAohBwi7hTbwDlJ-l-YFSON1WZWi-jTH63HtZb2jYW7aPbsXh2hAjnRGc17yorf8FpilLuzdaaO1nNmPPSQoLW8bEnmw3g1xC3K30r9sS-LpHCGWen1qF2-xG2tLC2DZhK5Im5W8o6L2QmjwCcoXjuKrRCl8kyO-9HmabNo2qnakx6Dx4gMoQbS4199DEa1AA9dhipwbMeCnb_2KIo-wwC5"/>
</div>
</header>
<main className="max-w-2xl mx-auto pb-32">

<section className="relative px-6 pt-8 pb-10 overflow-hidden">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" ></div>
<div className="flex flex-col items-center text-center">
<div className="relative mb-6">
<div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary to-primary-container">
<img alt="Tailor Avatar" className="w-full h-full object-cover rounded-full border-4 border-surface" data-alt="portrait of a senior expert tailor with a friendly expression wearing traditional attire in a sunny workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI9uqW_CBv2C6yy032iV4J3n7elNE1BNHJgDf9kp2qVdc3-KTAsmzxwZjkHoPcfc5ipi0cGS6LObs-xuzimbxihQmrGFRLa7SaH4utIZRNb0gTmB9wRlXACd00QUy_ZfKtDLzGiob2Cz_1HCWO6lWfDETfzCLyLhXRLDx55fn7IOKnatSG-Eq23iPilgHGwVmYAmKl7Hlqp-YPnVWJO6lclN_y8huWpztgxjkc4j_UEznG_8odpUZ5p9Q74EOFhYaqfViCkoYj7aTY"/>
</div>
<div className="absolute bottom-1 right-1 bg-secondary text-white p-1.5 rounded-full shadow-lg">
<span className="material-symbols-outlined text-sm" data-icon="verified" >verified</span>
</div>
</div>
<h2 className="font-headline font-bold text-3xl text-on-surface mb-2">أحمد البشير</h2>
<div className="flex items-center gap-2 mb-3">
<div className="flex text-primary">
<span className="material-symbols-outlined text-lg" data-icon="star" >star</span>
<span className="material-symbols-outlined text-lg" data-icon="star" >star</span>
<span className="material-symbols-outlined text-lg" data-icon="star" >star</span>
<span className="material-symbols-outlined text-lg" data-icon="star" >star</span>
<span className="material-symbols-outlined text-lg" data-icon="star_half" >star_half</span>
</div>
<span className="text-tertiary font-semibold text-sm">(١٢٨ تقييم)</span>
</div>
<div className="flex items-center gap-1 text-tertiary mb-6">
<span className="material-symbols-outlined text-base" data-icon="location_on">location_on</span>
<span className="text-sm">الخرطوم، المنشية</span>
</div>

<div className="flex flex-wrap justify-center gap-2">
<span className="px-4 py-1.5 rounded-full bg-[#FAFAF8]-container-low border-0 bg-white shadow-sm text-on-surface-variant text-xs font-bold">جلابية</span>
<span className="px-4 py-1.5 rounded-full bg-[#FAFAF8]-container-low border-0 bg-white shadow-sm text-on-surface-variant text-xs font-bold">دشداشة</span>
<span className="px-4 py-1.5 rounded-full bg-[#FAFAF8]-container-low border-0 bg-white shadow-sm text-on-surface-variant text-xs font-bold">تطريز يدوي</span>
<span className="px-4 py-1.5 rounded-full bg-[#FAFAF8]-container-low border-0 bg-white shadow-sm text-on-surface-variant text-xs font-bold">بدل رسمية</span>
</div>
</div>
</section>

<section className="px-6 mb-10">
<div className="bg-[#FAFAF8]-container-lowest p-6 rounded-2xl shadow-sm border-0 bg-white shadow-sm">
<h3 className="font-headline font-bold text-lg mb-3">عن الخياط</h3>
<p className="text-on-surface-variant leading-relaxed text-sm">
                    خياط بخبرة تزيد عن ٢٠ عاماً في صناعة الجلابية السودانية التقليدية والتصاميم الحديثة. أهتم بأدق التفاصيل لضمان راحة ومظهر يليق بزبائني. نستخدم أفضل الأقمشة ونلتزم بالمواعيد بدقة متناهية.
                </p>
</div>
</section>

<section className="px-6">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline font-bold text-lg">معرض الأعمال</h3>
<button className="text-primary text-sm font-bold">عرض الكل</button>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Work 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="close-up of intricate white embroidery on high-quality white cotton fabric of a traditional jellabiya" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4HKPYfCblMoqcSXtmS_c5Sxrvefbs6JJx8Iuf5JPOqqnfg0N5EcQ9ycjmNbhIvVEpE1-ijNoRYchUTLsBTARCEy1WGzGzMI6snlW6eEqh9lMRD4HtGV7-8GQzIZCyDjI3JRrYhrpTBaQb51WrFZdJ7vIlfL62riqAbqKrzdTa8sVnbXX9ZEBAUSUWDTQFi-NjPJnjq0EurAOYCIyDY3bqVwwJZ6UxUbW7ZtzQGZ6Gjri2uwNBibvJE0DE1dEl-X353-6ygTVviadW"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Work 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="elegant dark grey traditional robe hanging in a bright modern workshop with tailor tools in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjZX9T19WRv0ySemQFiit0iiFXaxrrfAI3K9lxSGPRnDGgvQHAXXN9p5SA2xVLxASBhntCF_jQk0Fq7jNviBHK8UDZgIlpV1tTF-L1-r81L__vuXhplTfvbGpWywFkhAsQWJnLtTaPGCICQEpxh1MWv3zwQzjExNgeN_iPbvlsybLyFQ6niWp-D4BzSKCn6sMTJwj5dLzroaiaY53zmZ7yQu7B0yF0r61uRn70Ol9yy0tWSN3zWw9bfdJoQAGyHIkwVz4MDKZpJcLo"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Work 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="folded premium white fabric rolls with gold measuring tape on a wooden tailor table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqbMYmYwFFD7R2lYKmfmlw8_yInrFWJU6mMVCSW2dGiZSsedmDRUaCTWAVYXbfh7dsTeIHZlGP5O1ByhgGAabsWclg2drnBAq3atfoRPG9t3il9PM4WxWPdjL3fr3sACcuBaX5mrXtEU-obZ3Yyz-P1L0S5OatCpPiwTH6CmKvOOfCFW2G5ui08X2NMUZyse2eYMQXLz_uqAnfoPN04uBdr886GPAWje-z3ctzwlCXWQh7ySxFdM3QxIgLVcnneudxHuI9HgyrIzbg"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Work 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="modern minimalist office wear shirts in beige and sand colors professionally pressed and arranged" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOD9G9YOfh59bzP0HsV0SSmZ5fPBLezf0dhg1iMiaYXfsRCkSkdomSedwpH5e9AYvH9PepwxsWwInkbfW_vp6NleP2GYfCIT7ZXVbV5lSVgnlH--Tkc43jLlBB41882buZTlUCJ4pbCGdr3pz8d8EbumIyPtz9coOhO32RMKg7jFmPESiJj4Dzj9g98SaUZRNvTmcPYy3t9LXEQPGJf5SytfwF3OGZ0ra0Zky47Yp1dTNTdQTHyriClbfOwlphj4WpZIYBgkiNniDQ"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Work 5" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="fashionable linen clothing with detailed stitching patterns in earthy tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVG1SckZae4bgWau0DoDEO1UP_1ag4HDeBs7fO9LTsmXpjAkCcYkIjAxXmyg9XPKyUVgrvqQ0-9SnwO-c5F9ZwgMIZTuaxRVUuBkJ7p3oLhONEU63e0nP5Ocf8xsouwQg7ReiOWhLFA02oNnN6Pw5plgPVE6hbkbezbHh9cuNFi2IIF1QK6PpAiVz0DtrR4JmQy_sxUfPt5rWMgXIGCNE2Mfi4uReHOlfmcd_5rP29CjPnsv92pgrM9Pd44rxQNGt7oQ-eXSLAHQDj"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-[#FAFAF8]-container-low flex flex-col items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-3xl mb-1" data-icon="add_circle">add_circle</span>
<span className="text-[10px] font-bold uppercase tracking-wider">+٢٤ صورة</span>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full p-6 bg-[#FAFAF8]/80 backdrop-blur-xl border-t border-outline-variant/10 z-[60]">
<button className="w-full premium-gradient text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            اطلب من هذا الخياط
        </button>
</div>

<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-100 dark:border-neutral-800 shadow-[0_-4px_12px_rgba(26,28,27,0.04)] rounded-t-2xl">
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">الرئيسية</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C9A84C] bg-[#C9A84C]/10 rounded-xl px-3 py-1 active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="straighten">straighten</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">الخياطين</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">طلباتي</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 hover:text-[#C9A84C] transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold mt-1">حسابي</span>
</a>
</nav>
    </>
  );
}