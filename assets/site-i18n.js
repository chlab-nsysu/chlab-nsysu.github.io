/* Chang Lab multilingual interface. Publication citations, poster titles and author names are never translated. */
(function(){
'use strict';
const page=location.pathname.split('/').pop()||'index.html';
const home=page==='index.html';
const labels={Home:'首頁',Research:'研究方向',PI:'主持人',Members:'團隊成員',Publications:'研究著作',News:'活動消息','Join Us':'加入我們',Contact:'聯絡'};
const headings={
'research.html':['研究方向｜Chang Lab','Research | Chang Lab'],
'pi.html':['主持人｜Chang Lab','Principal Investigator | Chang Lab'],
'members.html':['團隊成員｜Chang Lab','Members | Chang Lab'],
'publications.html':['研究著作｜Chang Lab','Publications | Chang Lab'],
'news.html':['活動消息｜Chang Lab','News & Activities | Chang Lab'],
'join.html':['加入我們｜Chang Lab','Join Us | Chang Lab'],
'contact.html':['聯絡我們｜Chang Lab','Contact | Chang Lab']};
// Prefixes identify existing English copy. Each Chinese translation stays adjacent to the source it represents.
const zh={
'research.html':[
['Research','研究方向'],
['From marine-derived compounds to whole-organism biology','從海洋來源活性成分出發，結合天然物研究與活體模式，探討壓力反應、老化及神經退化相關的生物學問題。'],
['RESEARCH PHILOSOPHY','研究理念'],
['Exploring bioactive compounds through mechanistic biology.','從活性成分篩選走向作用機制的研究'],
['Our laboratory studies the biological potential of natural products','本實驗室以海洋來源天然物為研究重點，運用實驗模式探討候選成分的生物活性與潛在作用機制。'],
['We use Caenorhabditis elegans to connect molecular hypotheses','我們以秀麗隱桿線蟲（<em>Caenorhabditis elegans</em>）為活體研究平台，將分子層級假說與可量化的生物表型結合。以下介紹主要研究方向；個別成分的功效仍須經實驗驗證。'],
['Marine natural products','海洋天然物'],['Stress responses & aging','壓力反應與老化'],['Neurodegeneration models','神經退化模式'],['Whole-organism model platform','活體模式研究平台'],
['Research direction 01','研究方向 01'],['Research direction 02','研究方向 02'],['Research direction 03','研究方向 03'],
['Marine Natural Products & Bioactive Compounds','海洋天然物與活性成分'],
['Marine organisms and microorganisms produce structurally diverse natural products','海洋生物與微生物能產生結構多樣的天然化合物，提供探討生物活性的研究契機。我們透過候選成分評估與模式生物實驗，探索其潛在作用。'],
['We combine compound-focused screening with organism-level observations','將化合物篩選與活體表型觀察結合，協助選擇值得深入研究的候選成分，並建立可驗證的機制假說。'],
['Marine-derived metabolites','海洋來源代謝物'],['Bioactivity screening','生物活性篩選'],['Mechanistic hypotheses','作用機制假說'],
['Oxidative Stress, Stress Resilience & Healthy Aging','氧化壓力、壓力耐受與健康老化'],
['We use Caenorhabditis elegans as a whole-organism platform','我們以<em>Caenorhabditis elegans</em>為活體模式，研究環境壓力、氧化還原平衡、壓力耐受與壽命相關表型之間的關係。'],
['Depending on the study, experimental readouts may include','依據研究設計，可評估壓力處理後存活率、活性氧相關指標、壽命及壓力反應螢光報導訊號等。'],
['Oxidative stress','氧化壓力'],['Stress tolerance','壓力耐受'],['Lifespan phenotypes','壽命相關表型'],
['Neurodegeneration & Disease-Related Phenotypes','神經退化與疾病相關表型'],
['Neurodegenerative conditions involve complex changes','神經退化疾病涉及神經細胞完整性、蛋白質恆定與細胞壓力反應等多層次變化。我們運用<em>C. elegans</em>疾病相關模式進行表型與機制研究。'],
['Relevant readouts may include','相關指標可能包括 α-synuclein 聚集表型、多巴胺神經元完整性與行為變化。這些模式可協助機制研究，但不能取代臨床證據。'],
['Parkinson’s disease-related models','帕金森氏症相關模式'],['α-Synuclein phenotypes','α-Synuclein 相關表型'],['Dopaminergic neurons','多巴胺神經元'],['Proteostasis','蛋白質恆定'],
['EXPERIMENTAL STRATEGY','實驗策略'],['From candidate to mechanism','從候選成分到作用機制'],
['A flexible experimental framework','依據各研究目的與現有證據調整的實驗流程。'],
['Candidate selection','候選成分選擇'],['Phenotypic assessment','生物表型評估'],['Mechanistic testing','作用機制驗證'],['Evidence integration','證據整合'],
['Source and prioritize natural compounds','確認候選天然物的來源與身分，並設定適當的實驗對照。'],
['Establish tolerated exposure conditions','建立適當的暴露條件，量化與研究目的相關的生物反應。'],
['Use complementary reporter','視需要搭配螢光報導、遺傳學、影像分析或生化方法進行驗證。'],
['Assess reproducibility, limitations','評估結果的再現性、研究限制及其他模式驗證的必要性。'],
['Specific methods and pathways vary by project','實際使用的方法與訊息傳遞路徑依研究計畫而異；可參考本實驗室的期刊論文與研討會成果。'],
['Interested in our research?','對我們的研究有興趣嗎？'],['We welcome scientific exchange','歡迎學術交流與潛在研究合作洽詢。'],['Contact Chang Lab','聯絡 Chang Lab']
],
'pi.html':[
['Principal Investigator','主持人'],
['Research profile, academic training','張鈞涵博士的研究簡介、學經歷、研究計畫與學術活動。'],['ABOUT THE PI','關於主持人'],
['Dr. Chun-Han Chang is an Assistant Professor','張鈞涵博士現任國立中山大學海洋生物科技暨資源學系助理教授，研究主題包括海洋天然物、氧化壓力、健康老化、神經退化及環境毒理。'],
['At the Marine Natural Products & Aging Research Laboratory','於 Marine Natural Products &amp; Aging Research Laboratory，透過天然物活性篩選、分子生物學與活體模式，尤其是秀麗隱桿線蟲（<em>Caenorhabditis elegans</em>），研究天然及環境化合物的生物效應與可能機制。'],
['View all 28 publications','查看全部 28 篇研究著作 ↗'],['CURRENT POSITION','現職'],
['Assistant Professor','助理教授'],['Research themes','研究主題'],['Marine bioactives · Healthy aging','海洋天然物 · 健康老化 · 壓力生物學 · 神經退化'],
['EXPERTISE','研究專長'],['Research interests','研究興趣'],
['Marine natural products and bioactive compounds','海洋天然物與活性成分'],['Natural products from marine organisms','海洋生物與微生物來源天然物、生物活性篩選及作用機制研究。'],
['Healthy aging and oxidative stress resistance','健康老化與氧化壓力耐受'],['Stress-response signaling, lifespan-associated phenotypes','實驗模式中的壓力反應訊息傳遞、壽命相關表型與抗氧化介入。'],
['Neurodegenerative disease and Parkinson’s disease models','神經退化疾病與帕金森氏症模式'],['Neuroprotective compounds and phenotype-based studies','利用活體神經退化模式評估神經保護候選成分及相關表型。'],
['ACADEMIC BACKGROUND','學術背景'],['Education and professional appointments','學歷與任職經歷'],['Professional appointments','任職經歷'],['Postdoctoral Fellow','博士後研究員'],['Education','學歷'],
['Ph.D. in Environmental Science','環境科學博士'],['B.E. in Environmental Science','環境科學學士'],
['Department of Marine Biotechnology and Resources, National Sun Yat-sen University, Taiwan','國立中山大學海洋生物科技暨資源學系'],
['Department of Cardiovascular Aging, National Cerebral and Cardiovascular Center','日本國立循環器病研究中心（NCVC）心血管老化部門'],
['Institute of Food Science and Technology, National Taiwan University','國立臺灣大學食品科技研究所'],
['School of Forestry and Resource Conservation, National Taiwan University','國立臺灣大學森林環境暨資源學系'],['Bioenvironmental Systems Engineering, National Taiwan University','國立臺灣大學生物環境系統工程學系'],
['Department website','系所官方網站'],['Institution website','機構官方網站'],['Institute website','研究所官方網站'],['School website','學系官方網站'],
['RESEARCH PROJECTS','研究歷程'],['Research experience','研究經驗'],
['Marine natural products · NSYSU','海洋天然物 · 中山大學'],['Cardiovascular aging · NCVC','心血管老化 · NCVC'],['Food bioactives · NTU','食品活性成分 · 臺灣大學'],['Environmental toxicology · NTU','環境毒理 · 臺灣大學'],
['Screening and mechanistic investigation of compounds derived from marine organisms','運用<em>C. elegans</em>評估海洋來源天然物的壓力耐受、老化相關表型與神經保護潛力，並探討其作用機制。'],
['Characterization of a spontaneous atrial fibrillation mouse model','研究自發性心房顫動小鼠模式、心血管重塑與纖維化，以及老化細胞清除相關議題。'],
['Natural compounds, metabolic regulation, circadian rhythm','研究天然化合物、代謝調控、生理時鐘與腸道微生物相關機制，以及精油活性與分析。'],
['Organic selenium and aging-related phenotypes','研究有機硒與<em>C. elegans</em>老化表型、奈米材料毒性及重金屬／受污染沉積物。'],
['FUNDED RESEARCH','研究計畫'],['Research grant','研究計畫'],['Role: Principal Investigator','計畫角色：主持人 · 三年期研究計畫'],
['Screening and mechanistic investigation of the antioxidant and anti-aging potential','以<em>Caenorhabditis elegans</em>探討海洋天然活性成分的抗氧化、延緩老化潛力與分子作用機制。'],
['SELECTED RECOGNITION','學術榮譽'],['Awards','獲獎紀錄'],['View recent academic activities','查看近期學術活動 ↗']
],
'members.html':[
['Members','團隊成員'],
['Curiosity, collaboration, and rigorous experimentation','以好奇心、合作與嚴謹實驗為基礎，一起探索海洋天然物與活體生物學。'],
['LAB LEADERSHIP','研究室主持'],['Principal Investigator','主持人'],['Research leadership and mentoring.','研究規劃與人才培育。'],['Assistant Professor','助理教授'],
['Department of Marine Biotechnology and ResourcesNational Sun Yat-sen University','國立中山大學海洋生物科技暨資源學系'],
["Dr. Chang's research focuses",'張鈞涵博士以天然物的生物活性為研究主軸，特別關注海洋來源代謝物、壓力耐受、健康老化及神經退化相關表型，並使用秀麗隱桿線蟲（<em>Caenorhabditis elegans</em>）作為模式生物。'],
['Marine bioactives','海洋天然物'],['Stress biology','壓力生物學'],['Healthy aging','健康老化'],['Neurodegeneration','神經退化'],
['Read full PI profile','完整主持人簡介 ↗'],['Email the PI','聯絡主持人 ↗'],
['LAB LIFE & COLLABORATION','實驗室生活與合作'],['Research is a team effort','研究是一場團隊合作'],
['Our work brings together marine natural product chemistry','我們結合海洋天然物化學、活體模式及分子研究方法，共同探索老化與壓力耐受的生物學問題。'],
['Exploring marine bioactives, together.','一起探索海洋天然物的可能性'],
['At the 41st Symposium of Natural Products','本實驗室於第 41 屆天然藥物研討會分享三項互補的研究方向：'],
['Marine natural products & healthy aging','海洋天然物與健康老化'],['Marine fungal metabolites & stress resistance','海洋真菌代謝物與壓力耐受'],['Natural compounds & neurodegeneration','天然化合物與神經退化'],
['Conference author information and presentation highlights','詳細作者資訊與研討會活動花絮請見 News &amp; Activities 頁面。'],
['Interested in our research?','對我們的研究有興趣嗎？'],['Explore our work and contact the lab','歡迎瀏覽研究內容，並來信討論研究學習或合作機會。'],['Contact Chang Lab','聯絡 Chang Lab']
],
'publications.html':[
['Publications','研究著作'],
['Peer-reviewed research spanning marine bioactives','研究涵蓋海洋天然物、老化、神經退化、心血管生物學及環境毒理等領域。'],
['RESEARCH OUTPUT','研究成果'],['Peer-reviewed publications','期刊論文'],
['A chronological list of 28 articles','以下依出版年份排列 28 篇期刊論文，資料以主持人 2026 年 11 月更新的學術履歷為基礎。論文標題、作者、期刊與書目資訊均保留英文原文。'],
['Search papers','搜尋論文'],['Year','年份'],['All years','所有年份']
],
'news.html':[
['News & Activities','活動消息'],
['Research publications, conference presentations','記錄實驗室的期刊研究、研討會發表與學術活動。研究成果與海報標題均保留英文原文。'],
['LATEST MILESTONES','近期成果'],['2026 Highlights','2026 年研究亮點'],
['Research outcomes and scientific activities led by','張鈞涵博士與實驗室成員參與的研究成果及學術活動。'],['All publications','查看全部論文 ↗'],
['Conference','研討會'],['✦ Lab diary','✦ 實驗室日誌 · 2026'],
['Three poster presentations at the 41st Symposium of Natural Products','第 41 屆天然藥物研討會：三篇海報發表'],
['From marine natural products to healthy aging','研究主題涵蓋海洋天然物、健康老化與神經保護，於 2026 年高雄醫學大學舉行的聯合學術研討會分享。'],
['Posters','篇海報'],['Marine bioactives & longevity','海洋天然物與延長壽命'],['Marine fungal metabolites','海洋真菌代謝物'],['Neurodegenerative disease models','神經退化疾病模式'],
['CONFERENCE MOMENTS','研討會花絮'],['A little glimpse behind the science','研究之外的精彩片刻 ✺'],
['5 photos · Kaohsiung 2026','5 張照片 · 2026 高雄'],['Lab crew · 2026','實驗室團隊 · 2026'],
['01 / Healthy aging','01 / 健康老化'],['02 / Marine fungi','02 / 海洋真菌'],['03 / Neurobiology','03 / 神經生物學'],['Event moments','活動現場'],
['Swipe to explore the photos','左右滑動瀏覽照片 →'],['Lab crew, poster sessions','實驗室團隊、海報展示，以及研究交流的美好時刻。'],
['BEHIND THE POSTERS','海報背後的研究'],['Three research stories','三個研究故事'],['Three presentations · 2026','三篇海報發表 · 2026'],
['* Corresponding author. Titles and author order','* 通訊作者。海報題名及作者順序均依原始海報保留英文。'],
['Publication','期刊論文'],['Award','學術獎項'],['Earlier conference activities','歷年研討會活動'],['Oral presentation','口頭報告'],
['Read via DOI','開啟 DOI ↗'],['Official award announcement','官方獲獎公告 ↗']
],
'join.html':[
['Join Chang Lab','加入 Chang Lab'],
['Explore research training and collaboration','了解張鈞涵博士於國立中山大學提供的研究訓練與合作交流機會。'],
['RESEARCH TRAINING','研究訓練'],['Who should get in touch?','歡迎哪些人與我們聯繫？'],
['We welcome inquiries from undergraduate and graduate students','歡迎對海洋天然物、壓力生物學、神經退化或<em>C. elegans</em>活體模式有興趣的大學部及研究所學生來信，也歡迎研究合作提案。'],
['Undergraduate project students','大學部專題研究生'],['Explore whole-organism biological assays','可接觸活體生物學實驗、螢光影像、文獻解讀及量化分析。'],
['Master’s and doctoral applicants','碩、博士班申請者'],['Potential projects may combine marine compound screening','研究主題可能結合海洋天然物篩選、老化表型、遺傳與分子方法及機制分析。'],
['Research collaboration','學術研究合作'],['Investigators interested in bioactivity screening','歡迎對活性篩選、海洋來源化合物、老化或神經毒性模式有興趣的研究人員洽談合作。'],
['Practical training','實作研究訓練'],['Projects may involve independent experimental planning','研究訓練可能涵蓋實驗設計、實驗室安全、可再現資料分析與科學溝通。'],
['INQUIRIES','研究洽詢'],['Contact the PI','聯絡主持人'],['Assistant Professor, NSYSU','國立中山大學助理教授'],
['Please inquire about current supervision capacity','研究指導名額及合作機會請先來信確認；經費、津貼與正式入學條件依個別情況及校方規定辦理。'],
['Email the laboratory','寫信給實驗室 ↗'],['APPLICATION GUIDANCE','洽詢建議'],['How to introduce yourself','來信時可以提供哪些資訊？'],
['Tell us your academic background','簡介學術背景'],['Include your current degree program','提供目前就讀學程、學校，以及相關課程或研究經驗。'],
['Describe your research interests','說明研究興趣'],['Explain which laboratory projects','簡述感興趣的研究主題及原因。'],
['Share your plans and timeline','說明研究計畫與預計時程'],
['Indicate whether you seek an undergraduate project','請說明希望參與大學部專題、研究所、論文指導或研究合作，以及預計開始的時間；可視情況附上簡短 CV 或成績單。']
],
'contact.html':[
['Contact Chang Lab','聯絡 Chang Lab'],
['For scientific collaborations, student inquiries','研究合作、學生洽詢或學術事務，歡迎透過電子郵件與實驗室聯繫。'],
['OUR LOCATION','實驗室位置'],['Contact the Principal Investigator','聯絡研究室主持人'],
['Chun-Han Chang, Ph.D.Department of Marine Biotechnology and Resources','張鈞涵 博士<br>國立中山大學海洋生物科技暨資源學系<br>80424 高雄市鼓山區蓮海路 70 號'],
['Principal Investigator','主持人'],['Chun-Han Chang, Ph.D. · Assistant Professor','張鈞涵 博士 · 助理教授'],
['Official email','電子信箱'],['Laboratory research','實驗室研究方向'],['Marine natural products · C. elegans','海洋天然物 · <em>C. elegans</em> · 壓力生物學 · 健康老化 · 神經退化'],
['Send an email','寄送電子郵件 ↗'],['INSTITUTION','所屬機構'],['National Sun Yat-sen University','國立中山大學'],
['Located in Kaohsiung, Taiwan','Chang Lab 隸屬國立中山大學海洋生物科技暨資源學系，位於臺灣高雄。'],
['University website','中山大學官方網站 ↗'],['Department website','海資系官方網站 ↗'],
['Official campus map and directions','校園地圖與交通資訊 ↗'],['View university on Google Maps','在 Google Maps 查看學校位置 ↗']
]};
const menuList=Object.keys(labels);
let language=document.documentElement.dataset.language || (new URLSearchParams(location.search).get('lang')==='en'?'en':'zh-TW');
const elements=[],originals=new WeakMap();let countObserver=null;
function protectedContent(el){return !!el.closest('.pub-item,.snp-research-card,.news-poster-list');}
function normal(t){return t.replace(/\s+/g,' ').trim().replace(/&amp;/g,'&');}
function propagateLanguage(value){
  document.querySelectorAll('a[href]').forEach(function(a){
    const raw=a.getAttribute('href');
    if(!raw || /^(?:#|mailto:|tel:|https?:|\/\/|javascript:)/i.test(raw))return;
    if(!/^[A-Za-z0-9_-]+\.html(?:[?#]|$)/.test(raw))return;
    const u=new URL(raw,location.href);u.searchParams.set('lang',value);
    a.setAttribute('href',u.pathname.split('/').pop()+u.search+u.hash);
  });
}
function changeLanguage(value){
  language=value;document.documentElement.dataset.language=value;document.documentElement.lang=value;
  if(!home){
    document.title=headings[page][value==='en'?1:0];
    document.querySelectorAll('.navlinks a').forEach(function(a){
      if(!a.dataset.originalLabel)a.dataset.originalLabel=a.textContent.trim();
      const en=a.dataset.originalLabel;a.textContent=value==='en'?en:(labels[en]||en);
    });
    const menu=document.getElementById('menuButton');if(menu)menu.textContent=value==='en'?'☰ Menu':'☰ 選單';
    const crumb=document.querySelector('main .breadcrumb');
    if(crumb){
      if(!crumb.dataset.englishHtml)crumb.dataset.englishHtml=crumb.innerHTML;
      const cn=({'research.html':'研究方向','pi.html':'主持人','members.html':'團隊成員','publications.html':'研究著作','news.html':'活動消息','join.html':'加入我們','contact.html':'聯絡我們'})[page];
      crumb.innerHTML=value==='en'?crumb.dataset.englishHtml:'<a href="index.html">首頁</a> / '+cn;
    }
    elements.forEach(function(el){const original=originals.get(el);if(original&&el.isConnected)el.innerHTML=value==='en'?original.english:original.chinese;});
    document.querySelectorAll('.pub-id').forEach(function(el){
      if(!el.dataset.originalCitationLabel)el.dataset.originalCitationLabel=el.textContent;
      el.textContent=value==='en'?el.dataset.originalCitationLabel:el.dataset.originalCitationLabel.replace(/^PUBLICATION\s+(\d+)/i,'期刊論文 $1');
    });
    const search=document.getElementById('pubQuery');if(search){search.placeholder=value==='en'?'Search title, author, journal...':'搜尋英文標題、作者或期刊…';search.setAttribute('aria-label',value==='en'?'Search publications by title, author, or journal':'搜尋論文英文標題、作者或期刊名稱');}
    const help=document.getElementById('pubSearchHelp');if(help)help.textContent=value==='en'?'Bibliographic entries remain in English. Search using English titles, author names, or journal names.':'論文書目保留英文原文，請使用英文標題、作者姓名或期刊名稱搜尋。';
    const all=document.querySelector('#pubYear option[value="all"]');if(all)all.textContent=value==='en'?'All years':'所有年份';
    const yearSelect=document.getElementById('pubYear');if(yearSelect)yearSelect.setAttribute('aria-label',value==='en'?'Filter publications by year':'依出版年份篩選論文');
    const stat=document.getElementById('pubCount');
    if(stat){
      if(!countObserver){countObserver=new MutationObserver(function(){
        if(language!=='zh-TW')return;
        const m=stat.textContent.match(/^Showing (\d+) of (\d+) publications$/);
        if(m)stat.textContent='顯示 '+m[1]+' / '+m[2]+' 篇論文';
      });countObserver.observe(stat,{childList:true,subtree:true});}
      const filter=document.getElementById('pubYear');if(filter)filter.dispatchEvent(new Event('change'));
    }
    const footer=document.querySelector('footer .container > div:last-child');
    if(footer){
      if(!footer.dataset.englishFooter)footer.dataset.englishFooter=footer.innerHTML;
      footer.innerHTML=value==='en'?footer.dataset.englishFooter:'© <span id="year">'+new Date().getFullYear()+'</span> Chang Lab · 國立中山大學';
    }
  }
  document.querySelectorAll('.language-options a').forEach(function(a){
    if(a.hreflang===value)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');
  });
  propagateLanguage(value);
}
function initialize(){
  if(!home){
    const bar=document.querySelector('.topline .container');
    if(bar){const uni=bar.querySelector('a');
      if(uni)uni.innerHTML='<span class="university-zh">國立中山大學 · 臺灣高雄</span><span class="university-en">National Sun Yat-sen University · Kaohsiung, Taiwan</span>';
      const div=document.createElement('div');div.className='language-options';div.setAttribute('aria-label','語言 / Language');
      div.innerHTML='<a href="?lang=zh-TW" hreflang="zh-TW" lang="zh-TW" aria-label="繁體中文">繁中</a><a href="?lang=en" hreflang="en" lang="en" aria-label="English">EN</a>';
      bar.appendChild(div);
    }
    const dict=(zh[page]||[]).slice().sort(function(a,b){return b[0].length-a[0].length;});
    const selector='main h1,main h2,main h3,main h4,main p,main label,main small,main summary,main span,main time,main a,main strong,main .eyebrow,main .eyebrow-dark,main .date,main .pi-role';
    document.querySelectorAll(selector).forEach(function(el){
      if(protectedContent(el)||(el.tagName==='P'&&el.querySelector('a')))return;
      // Preserve gallery image markup: translate only the caption span, never its enclosing link.
      if(el.tagName==='A' && (el.hasAttribute('data-snp-view') || el.querySelector('img,picture,svg')))return;
      const en=normal(el.textContent);
      const matched=dict.find(function(row){return en===row[0]||en.startsWith(row[0]);});
      if(!matched)return;
      originals.set(el,{english:el.innerHTML,chinese:matched[1]});elements.push(el);
    });
  }
  document.querySelectorAll('.language-options a').forEach(function(a){
    if(!home){a.addEventListener('click',function(e){
      if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
      e.preventDefault();const value=a.hreflang==='en'?'en':'zh-TW';
      const u=new URL(location.href);u.searchParams.set('lang',value);
      if(location.protocol!=='file:')history.replaceState(null,'',u);
      changeLanguage(value);
    });}else{a.addEventListener('click',function(){queueMicrotask(function(){changeLanguage(document.documentElement.dataset.language||'zh-TW');});});}
  });
  changeLanguage(language);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialize,{once:true});else initialize();
})();