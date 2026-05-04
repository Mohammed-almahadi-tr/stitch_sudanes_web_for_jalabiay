import React from 'react';

export default function TailorProfileEditor() {
  return (
    <>
<aside className="h-screen w-64 fixed right-0 top-0 border-l-0 bg-[#f4f4f2] shadow-[1px_0_0_0_rgba(0,0,0,0.05)] flex flex-col py-8 px-4 z-50">
<div className="text-xl font-bold text-[#1a1c1b] mb-8 px-4">Heritage Digital</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-sm tracking-wide">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined">shopping_cart</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-sm tracking-wide">Orders</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined">straighten</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-sm tracking-wide">Measurements</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5f5e5c] hover:bg-[#e8e8e6] transition-colors duration-200" href="#">
<span className="material-symbols-outlined">groups</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-sm tracking-wide">Customers</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#755b00] font-bold border-r-4 border-[#755b00] bg-white/50" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-['Be_Vietnam_Pro'] font-medium text-sm tracking-wide">Settings</span>
</a>
</nav>
<div className="mt-auto px-4 pt-4 border-t border-outline-variant/20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#FAFAF8]-container-high overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" data-alt="portrait of a professional male tailor with grey hair wearing a crisp linen shirt in a high-end workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9nLbQtVV81hibo2I-B465npSK70C5A-R-JpNoLbEALRmszDtEhcaNAy-h9Td40ZzaTegnLzbuZSLlcuraDkNeFoN501yibrkAqKGQ-kQQ9QQfR4HRubB-VxRCoz64tSwtNUduTMRbLVBpZyFvzAENPOVX5DEfZzHIOtmN1Xa0IrPhwYhQE1AxOenFWlon9Y-pHn-0js0mZp_GRKZj_JUU3YbxWmUMdd9_EaBdR_5pRnUn_wgc-lPEaEHQopiXZDs1wt1H2AdAXZpv"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold">عمر المختار</span>
<span className="text-xs text-tertiary">Master Tailor</span>
</div>
</div>
</div>
</aside>

<header className="fixed top-0 left-0 w-[calc(100%-16rem)] h-20 px-10 bg-[#FAFAF8]/80 backdrop-blur-xl z-40 flex justify-between items-center border-b border-[#e8e8e6]">
<div className="flex items-center gap-4">
<h1 className="text-2xl font-bold font-headline tracking-tight text-on-surface">إعدادات الملف الشخصي</h1>
</div>
<div className="flex items-center gap-6">
<div className="relative group">
<span className="material-symbols-outlined text-tertiary cursor-pointer hover:text-primary transition-all">notifications</span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-[#755B00] to-[#C9A84C] text-white rounded-full"></span>
</div>
<span className="material-symbols-outlined text-tertiary cursor-pointer hover:text-primary transition-all">help_outline</span>
<button className="signature-gradient text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-sm hover:opacity-90 active:scale-[0.98] transition-all">
                حفظ التغييرات
            </button>
</div>
</header>

<main className="mr-64 pt-28 pb-20 px-10 pattern-bg min-h-screen">
<div className="max-w-6xl mx-auto space-y-8">

<div className="grid grid-cols-12 gap-8">

<section className="col-span-8 bg-[#FAFAF8]-container-lowest rounded-xl p-8 space-y-8 shadow-sm">
<div className="flex items-start gap-8">
<div className="relative group">
<div className="w-32 h-32 rounded-2xl overflow-hidden bg-[#FAFAF8]-container-high border-4 border-surface shadow-md">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="close-up portrait of an elderly Sudanese tailor with a warm smile and wise eyes, professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtRtNnyiqnHp8JBNyI3DshHbYIczKAfQGmXowS3earTU2frIktzE7yu890HEszT8gj7m0qa3zWctIO8NDk05tA05bsy5IRp87nH3-3p_fPwxVGUtSawiwEGzTaEBJu0tzSs_pQVc6K5qlXLzcYP8WWBF-POc7ZMpU97-so9DEl5y_-hD8W0FNd0XZcshskDeILRh1dEbnyByqxkfdX-bJW7xrR7INMecGhWzB3qAu7NCsgSpF4nhvtwq1eG2ltAtQKN-67VfjaiENX"/>
</div>
<button className="absolute -bottom-2 -left-2 bg-white p-2 rounded-full shadow-lg text-primary border-0 bg-white shadow-sm hover:bg-[#FAFAF8]-container-low transition-colors">
<span className="material-symbols-outlined text-sm">photo_camera</span>
</button>
</div>
<div className="flex-1 space-y-6">
<div className="space-y-1">
<label className="text-xs font-bold text-tertiary uppercase tracking-wider">الاسم الكامل</label>
<input className="w-full bg-[#FAFAF8]-container-high border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-lg px-4 py-3 text-lg font-bold transition-all" placeholder="أدخل اسمك الكامل" type="text" value="عمر المختار السوداني"/>
</div>
<div className="space-y-3">
<label className="text-xs font-bold text-tertiary uppercase tracking-wider">التخصصات الحرفية</label>
<div className="flex flex-wrap gap-3">
<label className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#FAFAF8]-container-low border-0 bg-white shadow-sm cursor-pointer hover:border-primary-container transition-all has-[:checked]:bg-primary-container/10 has-[:checked]:border-primary">
<input checked="" className="hidden" type="checkbox"/>
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span className="text-sm font-semibold">جلابية سودانية</span>
</label>
<label className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#FAFAF8]-container-low border-0 bg-white shadow-sm cursor-pointer hover:border-primary-container transition-all has-[:checked]:bg-primary-container/10 has-[:checked]:border-primary">
<input checked="" className="hidden" type="checkbox"/>
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span className="text-sm font-semibold">دشداشة</span>
</label>
<label className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#FAFAF8]-container-low border-0 bg-white shadow-sm cursor-pointer hover:border-primary-container transition-all has-[:checked]:bg-primary-container/10 has-[:checked]:border-primary">
<input checked="" className="hidden" type="checkbox"/>
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
<span className="text-sm font-semibold">تطريز يدوي</span>
</label>
</div>
</div>
</div>
</div>
</section>

<section className="col-span-4 space-y-4">
<div className="bg-[#FAFAF8]-container-lowest rounded-xl p-6 shadow-sm flex flex-col items-center text-center space-y-2 border-b-4 border-primary">
<span className="text-xs font-bold text-tertiary uppercase tracking-widest">متوسط التقييم</span>
<div className="text-4xl font-extrabold text-on-surface flex items-center gap-2">
                            4.9
                            <span className="material-symbols-outlined text-primary text-3xl" >star</span>
</div>
<p className="text-sm text-tertiary font-medium">بناءً على 124 تقييم حقيقي</p>
</div>
<div className="bg-secondary-container/20 rounded-xl p-6 shadow-sm flex flex-col items-center text-center space-y-2 border-b-4 border-secondary">
<span className="text-xs font-bold text-on-secondary-container uppercase tracking-widest">طلبات مكتملة</span>
<div className="text-4xl font-extrabold text-on-secondary-container">542</div>
<p className="text-sm text-on-secondary-container font-medium">عملاء سعداء في الخرطوم</p>
</div>
</section>
</div>

<section className="bg-[#FAFAF8]-container-lowest rounded-xl p-8 shadow-sm space-y-6">
<div className="flex items-center justify-between border-b border-surface-container-high pb-4">
<h2 className="text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">history_edu</span>
                        عن الحرفي
                    </h2>
</div>
<div className="relative group">
<textarea className="w-full min-h-[160px] bg-[#FAFAF8]-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-xl p-6 text-on-surface leading-relaxed text-lg" placeholder="اكتب نبذة عن خبرتك وحرفيتك...">خياط محترف بخبرة تزيد عن 25 عاماً في تفصيل الأزياء السودانية التقليدية. تخصصت في حياكة الجلابية الفاخرة باستخدام أجود أنواع الأقمشة القطنية السويسرية والإنجليزية، مع التركيز على دقة التطريز اليدوي الذي يعكس هويتنا الثقافية العريقة. أسعى دائماً لتقديم جودة تليق بمناسباتكم الخاصة.</textarea>
<div className="absolute bottom-4 left-4 text-xs font-bold text-tertiary/50">240 / 500</div>
</div>
</section>

<section className="space-y-6">
<div className="flex items-center justify-between px-2">
<h2 className="text-xl font-bold flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-primary">collections</span>
                        معرض الأعمال (بورتفوليو)
                    </h2>
<button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                        عرض الكل
                    </button>
</div>
<div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">

<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-md border-4 border-white">
<img alt="Work 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="close-up of exquisite white Sudanese Jellabiya with intricate gold silk embroidery on the collar and chest, professional studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaDQ74u8WXanQ_wAEK-B-oXyP0PbU9zHU1opUn3f4wxvc04Uxr6dx1MTyKfaWzc3_BDiiQQoS0rkyJWC1ZDyEVKaWzv7_K6e3lnCnVBhhz99xz_Eng4ju2fZiPmSOkYunpQpCuT_esCZRYef6McxzeLxSiEMZq6t2QkEwansdI4smIvP-f2mltAsgxA0oYMFwlLDSsrmizm-F0kbiSPvdiFIGd43WS4o6AgltFbqI85wvxSOJkLCAE21umQubsb4VAje4oAm_nqvWm"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<span className="text-white font-bold text-lg">جلابية سويسرية ملكي</span>
<button className="mt-2 w-fit text-white/80 hover:text-white transition-colors">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl shadow-md border-4 border-white">
<img alt="Work 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="luxurious blue fabric folded neatly with tailor measuring tape and silver scissors on a dark wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhnrCUo-yYTJxpG2Wjs27P5hcjpHF07VatijFijequuCUdOgmx4GqMf22kpGRKD2mIDRknVfsGEp27vWzIDl6R-N8YPhqo7z6GcoTif7fKVXYthcdDAU29_mm0m0aqu4BtJt-4LLWya0FQ8coqscI9eL7g6OSfZ-WoKmfgyy_dIxQKkp1LIgiH2wjWfExj6jWQ9DsUxOCIk6Oh1oosBTJ3qI3Sju-GrrfdWferb3Cxn4vHMmiBaqiZqZeHx_qKc5Q91Em5N4Qnbrht"/>
<div className="absolute top-2 right-2 flex gap-1">
<button className="bg-white/90 p-1.5 rounded-full text-tertiary hover:text-error transition-colors"><span className="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl shadow-md border-4 border-white">
<img alt="Work 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="macro photo of white embroidery detail on cotton fabric, showing artisan craftsmanship and fine thread work" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7UKMa5ar1MTeGU71ki0pQZkdXPVyPTEMTGQTYGOj8JmCmbcLvb-bEUdootV9j19Jf9MzHMsOxsXWnuy1NAF3epfSsFoCUd7ZaDN81km7rYOGtRbn66EAIxLucshBY5ifTn4kWLmJappMDr6z2-EvwyvtPtpp7-gxFxRl_5HKrAjGmIJWYDVp4IpMgSXhMEOPUgjO7DltZoRlqHCss2ZzyQKdTwYthVebf_OMwxkAbD-aZJYrpOQTrnTyN1kigURA9HO3ifVxkFywQ"/>
<div className="absolute top-2 right-2 flex gap-1">
<button className="bg-white/90 p-1.5 rounded-full text-tertiary hover:text-error transition-colors"><span className="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl shadow-md border-4 border-white">
<img alt="Work 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="hanging selection of bespoke garments in a sunlit atelier, shallow depth of field with warm tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3_vfzBGa4h0yyuglRP5yndxyk70wPl7uFc0nJAJebuvhGsdqQjR8Mz0xamvjniObeEJ8_vdEe9arGj61AHy_6_LDQV6SGh2XvfDGwQVq6IAiA_ujP8d2Vepq9WRyrnkPvIzeEgtVr8lQW6h_VQRScej9QFmW7tFPTdBUDzZoF_7qWo_kZL5_sgtrlhrfserZs8ELjvfjjMpcH7U0P_OjUXIuqlbR6wre7zLJTCnqgnVvHWlO-GG7_0fGoVV5ln7igg1UtUqXFidj8"/>
<div className="absolute top-2 right-2 flex gap-1">
<button className="bg-white/90 p-1.5 rounded-full text-tertiary hover:text-error transition-colors"><span className="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>

<button className="border-0 bg-white shadow-sm border-outline-variant rounded-2xl flex flex-col items-center justify-center gap-3 bg-[#FAFAF8]-container-low hover:bg-[#FAFAF8]-container-high hover:border-primary transition-all group">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-3xl">add</span>
</div>
<span className="text-sm font-bold text-tertiary">إضافة عمل جديد</span>
</button>
</div>
</section>
</div>
</main>

<div className="fixed bottom-8 left-8 z-50">
<button className="w-14 h-14 bg-on-surface text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-tertiary transition-all">
<span className="material-symbols-outlined">support_agent</span>
</button>
</div>
    </>
  );
}