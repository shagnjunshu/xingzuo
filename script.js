// ==================== 1. 核心数据 (完整) ====================

const zodiacSigns = [
    { name: "白羊座", icon: "♈", range: "3.21-4.19", element: "fire", tags: ["冲动","热情","开拓"], desc: "天生的战士，充满活力但略显急躁。", planet: "火星" },
    { name: "金牛座", icon: "♉", range: "4.20-5.20", element: "earth", tags: ["稳重","享乐","固执"], desc: "重视物质安全感，审美极佳。", planet: "金星" },
    { name: "双子座", icon: "♊", range: "5.21-6.21", element: "air", tags: ["多变","机智","沟通"], desc: "思维敏捷，对世界充满好奇。", planet: "水星" },
    { name: "巨蟹座", icon: "♋", range: "6.22-7.22", element: "water", tags: ["顾家","敏感","守护"], desc: "外柔内刚，情感细腻丰富。", planet: "月亮" },
    { name: "狮子座", icon: "♌", range: "7.23-8.22", element: "fire", tags: ["霸气","自信","慷慨"], desc: "天生的王者，喜欢成为焦点。", planet: "太阳" },
    { name: "处女座", icon: "♍", range: "8.23-9.22", element: "earth", tags: ["完美","细节","服务"], desc: "逻辑缜密，追求极致的秩序。", planet: "水星" },
    { name: "天秤座", icon: "♎", range: "9.23-10.23", element: "air", tags: ["优雅","平衡","犹豫"], desc: "社交高手，追求和谐与美。", planet: "金星" },
    { name: "天蝎座", icon: "♏", range: "10.24-11.22", element: "water", tags: ["神秘","执着","极端"], desc: "洞察力强，爱恨分明。", planet: "冥王星" },
    { name: "射手座", icon: "♐", range: "11.23-12.21", element: "fire", tags: ["自由","乐观","哲学"], desc: "向往远方，永远的追梦人。", planet: "木星" },
    { name: "摩羯座", icon: "♑", range: "12.22-1.19", element: "earth", tags: ["自律","野心","传统"], desc: "脚踏实地，通过努力攀登高峰。", planet: "土星" },
    { name: "水瓶座", icon: "♒", range: "1.20-2.18", element: "air", tags: ["独立","革新","疏离"], desc: "思维超前，特立独行。", planet: "天王星" },
    { name: "双鱼座", icon: "♓", range: "2.19-3.20", element: "water", tags: ["浪漫","幻想","同情"], desc: "富有同情心，直觉超强。", planet: "海王星" }
];

const planetsData = [
    { id: "sun", name: "太阳", icon: "☀️", desc: "核心自我" },
    { id: "moon", name: "月亮", icon: "🌙", desc: "内在情感" },
    { id: "mercury", name: "水星", icon: "☿️", desc: "思维沟通" },
    { id: "venus", name: "金星", icon: "♀️", desc: "爱情价值" },
    { id: "mars", name: "火星", icon: "♂️", desc: "行动欲望" },
    { id: "jupiter", name: "木星", icon: "♃", desc: "幸运扩张" },
    { id: "saturn", name: "土星", icon: "♄", desc: "责任限制" },
    { id: "uranus", name: "天王星", icon: "♅", desc: "变革反叛" },
    { id: "neptune", name: "海王星", icon: "♆", desc: "梦想模糊" },
    { id: "pluto", name: "冥王星", icon: "♇", desc: "转化重生" }
];

const tarotDeck = [
    { name: "愚人", num: "0", icon: "🤡", style: "bg-fire", meaning: "新的开始，冒险，天真" },
    { name: "魔术师", num: "I", icon: "🎩", style: "bg-dark", meaning: "创造力，资源整合，技能" },
    { name: "女祭司", num: "II", icon: "🌙", style: "bg-moon", meaning: "直觉，潜意识，神秘" },
    { name: "皇后", num: "III", icon: "👑", style: "bg-earth", meaning: "丰收，母性，感官享受" },
    { name: "皇帝", num: "IV", icon: "🏰", style: "bg-fire", meaning: "权威，结构，控制" },
    { name: "教皇", num: "V", icon: "📜", style: "bg-earth", meaning: "传统，信仰，指引" },
    { name: "恋人", num: "VI", icon: "💞", style: "bg-fire", meaning: "选择，爱情，结合" },
    { name: "战车", num: "VII", icon: "🐎", style: "bg-dark", meaning: "胜利，意志力，行动" },
    { name: "力量", num: "VIII", icon: "🦁", style: "bg-fire", meaning: "勇气，耐心，柔性" },
    { name: "隐士", num: "IX", icon: "🕯️", style: "bg-moon", meaning: "内省，孤独，真理" },
    { name: "命运之轮", num: "X", icon: "🎡", style: "bg-dark", meaning: "改变，运气，周期" },
    { name: "正义", num: "XI", icon: "⚖️", style: "bg-earth", meaning: "公正，因果，真理" },
    { name: "倒吊人", num: "XII", icon: "🦇", style: "bg-moon", meaning: "牺牲，换角度，等待" },
    { name: "死神", num: "XIII", icon: "💀", style: "bg-dark", meaning: "结束，重生，断舍离" },
    { name: "节制", num: "XIV", icon: "🏺", style: "bg-fire", meaning: "平衡，融合，耐心" },
    { name: "恶魔", num: "XV", icon: "⛓️", style: "bg-dark", meaning: "束缚，欲望，物质" },
    { name: "高塔", num: "XVI", icon: "⚡", style: "bg-dark", meaning: "突变，灾难，觉醒" },
    { name: "星星", num: "XVII", icon: "🌟", style: "bg-moon", meaning: "希望，灵感，疗愈" },
    { name: "月亮", num: "XVIII", icon: "🦞", style: "bg-moon", meaning: "幻觉，不安，潜意识" },
    { name: "太阳", num: "XIX", icon: "☀️", style: "bg-sun", meaning: "成功，快乐，活力" },
    { name: "审判", num: "XX", icon: "🎺", style: "bg-fire", meaning: "召唤，复活，决定" },
    { name: "世界", num: "XXI", icon: "🌍", style: "bg-earth", meaning: "圆满，完成，新循环" }
];

// ==================== 2. 初始化与通用逻辑 ====================

document.addEventListener('DOMContentLoaded', () => {
    initStarBackground();
    initAlmanac();
    renderZodiacGrid();
    initMatchSelect();
    
    // 设置默认日期
    const now = new Date();
    document.getElementById('current-date-display').innerText = 
        `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日`;
    if(document.getElementById('chart-date')) {
        document.getElementById('chart-date').valueAsDate = now;
    }
});

function switchTab(tabId, event) {
    if(event) event.preventDefault();
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    if(event) event.target.classList.add('active');
}

// 伪随机生成器 (确保每天结果一致)
function seedRandom(seed) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    return function() { const x = Math.sin(hash++) * 10000; return x - Math.floor(x); };
}

// 星空背景动画
function initStarBackground() {
    const canvas = document.getElementById('star-bg');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, stars = [];
    const resize = () => { w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; init(); };
    const init = () => { stars = Array(100).fill().map(()=>({x:Math.random()*w, y:Math.random()*h, r:Math.random()*1.5, a:Math.random(), s:Math.random()*0.02})); };
    const draw = () => {
        ctx.clearRect(0,0,w,h); ctx.fillStyle="white";
        stars.forEach(p=>{ p.a+=p.s; if(p.a>1||p.a<0) p.s*=-1; ctx.globalAlpha=Math.abs(p.a); ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); });
        requestAnimationFrame(draw);
    };
    window.addEventListener('resize', resize);
    resize(); draw();
}

// ==================== 3. 首页：运势与黄历 ====================

function initAlmanac() {
    const goods = ["签约","搬家","约会","理发","求财","出行","祭祀","大扫除"];
    const bads = ["争吵","动土","借钱","打官司","熬夜","暴饮暴食"];
    const rng = seedRandom(new Date().toDateString());
    document.getElementById('almanac-good').innerText = goods[Math.floor(rng() * goods.length)];
    document.getElementById('almanac-bad').innerText = bads[Math.floor(rng() * bads.length)];
}

function renderZodiacGrid() {
    const grid = document.getElementById('zodiac-grid');
    grid.innerHTML = '';
    zodiacSigns.forEach((z, i) => {
        const div = document.createElement('div');
        div.className = 'zodiac-card';
        div.innerHTML = `<span class="z-icon">${z.icon}</span><h3>${z.name}</h3><small>${z.range}</small>`;
        div.onclick = () => openModal(i);
        grid.appendChild(div);
    });
}

function openModal(index) {
    const z = zodiacSigns[index];
    const rng = seedRandom(new Date().toDateString() + z.name);

    document.getElementById('m-icon').innerText = z.icon;
    document.getElementById('m-name').innerText = z.name;
    document.getElementById('m-date').innerText = z.range;
    
    // 运势数据
    document.getElementById('m-score-total').innerText = '⭐'.repeat(Math.floor(rng() * 3) + 3);
    document.getElementById('m-score-love').innerText = '❤️'.repeat(Math.floor(rng() * 3) + 3);
    document.getElementById('m-score-career').innerText = '💼'.repeat(Math.floor(rng() * 3) + 3);
    document.getElementById('m-num').innerText = Math.floor(rng() * 99) + 1;
    
    const colors = ["琥珀金", "深海蓝", "酒红", "森林绿", "珍珠白", "紫罗兰"];
    document.getElementById('m-color').innerText = colors[Math.floor(rng() * colors.length)];
    
    const texts = ["今天能量稳定，适合规划未来。", "财运亨通，注意把握机会。", "桃花运旺，自信是最好的装饰。", "稍微休息一下，不要过度劳累。"];
    document.getElementById('m-text').innerText = texts[Math.floor(rng() * texts.length)];

    // 性格数据
    document.getElementById('m-tags').innerHTML = z.tags.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('m-desc').innerText = z.desc;
    document.getElementById('m-planet').innerText = z.planet;
    document.getElementById('m-element').innerText = z.element === 'fire' ? '火' : z.element === 'water' ? '水' : z.element === 'air' ? '风' : '土';

    document.getElementById('fortune-modal').classList.remove('hidden');
    switchModalTab('tab-fortune');
}

function closeModal() { document.getElementById('fortune-modal').classList.add('hidden'); }
function switchModalTab(id, e) {
    if(e) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
    }
    document.querySelectorAll('.modal-body').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ==================== 4. 配对逻辑 ====================

function initMatchSelect() {
    const s1 = document.getElementById('sign-1');
    const s2 = document.getElementById('sign-2');
    zodiacSigns.forEach((z, i) => {
        s1.add(new Option(z.name, i));
        s2.add(new Option(z.name, i));
    });
}

function calculateMatch() {
    const idx1 = parseInt(document.getElementById('sign-1').value);
    const idx2 = parseInt(document.getElementById('sign-2').value);
    let dist = Math.abs(idx1 - idx2);
    if (dist > 6) dist = 12 - dist;

    const data = [
        { s: 95, t: "知己共鸣 (合相)", d: "默契十足，如同照镜子。" },
        { s: 50, t: "性格迥异 (十二分相)", d: "需大量磨合，充满新鲜感。" },
        { s: 80, t: "轻松伙伴 (六分相)", d: "关系和谐，沟通顺畅。" },
        { s: 40, t: "充满挑战 (刑相)", d: "吸引力强但冲突多。" },
        { s: 100, t: "天作之合 (拱相)", d: "能量流动完美，彼此支持。" },
        { s: 60, t: "需要调整 (梅花相)", d: "关系微妙，需调整步调。" },
        { s: 85, t: "致命吸引 (对冲)", d: "完全互补，爱恨交织。" }
    ];
    
    const r = data[dist];
    document.getElementById('match-result').classList.remove('hidden');
    document.getElementById('match-score').innerText = r.s + '%';
    document.getElementById('match-title').innerText = r.t;
    document.getElementById('match-desc').innerText = r.d;
}

// ==================== 5. 塔罗牌逻辑 ====================

let spreadState = { past: null, present: null, future: null };

function flipSpreadCard(pos) {
    if(spreadState[pos]) return;
    const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    spreadState[pos] = card;
    
    const front = document.getElementById(`front-${pos}`);
    front.className = `tarot-front ${card.style}`;
    front.innerHTML = `<div class="t-art">${card.icon}</div><div class="t-name">${card.name}</div><div class="t-num">${card.num}</div>`;
    
    document.getElementById(`card-${pos}`).classList.add('flipped');
    
    if(spreadState.past && spreadState.present && spreadState.future) {
        setTimeout(() => {
            document.getElementById('tarot-spread-result').classList.remove('hidden');
            document.getElementById('spread-text').innerHTML = `
                <span class="spread-item-title">⏪ 过去: ${spreadState.past.name}</span>${spreadState.past.meaning}<br>
                <span class="spread-item-title">▶️ 现在: ${spreadState.present.name}</span>${spreadState.present.meaning}<br>
                <span class="spread-item-title">⏩ 未来: ${spreadState.future.name}</span>${spreadState.future.meaning}
            `;
        }, 600);
    }
}

function resetSpread() {
    ['past','present','future'].forEach(p => {
        document.getElementById(`card-${p}`).classList.remove('flipped');
        spreadState[p] = null;
    });
    document.getElementById('tarot-spread-result').classList.add('hidden');
}

// ==================== 6. 生命灵数 ====================

function calculateNumerology() {
    const val = document.getElementById('num-date').value;
    if(!val) return alert('请选择日期');
    let sum = val.replace(/-/g,'').split('').reduce((a,b)=>a+parseInt(b),0);
    while(sum > 9 && sum !== 11 && sum !== 22) {
        sum = String(sum).split('').reduce((a,b)=>a+parseInt(b),0);
    }
    const meanings = {
        1:"独立与创造", 2:"合作与平衡", 3:"表达与社交", 4:"稳定与秩序", 5:"自由与冒险",
        6:"奉献与责任", 7:"内省与真理", 8:"权力与富足", 9:"博爱与智慧", 11:"灵性启蒙", 22:"大师构建"
    };
    document.getElementById('num-result').classList.remove('hidden');
    document.getElementById('life-path-num').innerText = sum;
    document.getElementById('num-title').innerText = `灵数 ${sum}`;
    document.getElementById('num-desc').innerText = meanings[sum] || "独特的天赋";
}

// ==================== 7. 专业星盘绘制 (核心) ====================

function generateFullChart() {
    const dStr = document.getElementById('chart-date').value;
    const tStr = document.getElementById('chart-time').value;
    if(!dStr || !tStr) return alert("请填写完整时间");
    
    const date = new Date(`${dStr}T${tStr}`);
    const J2000 = new Date("2000-01-01T12:00:00Z").getTime();
    const days = (date.getTime() - J2000) / 86400000;
    
    // 简易行星位置计算
    const getPos = (base, speed) => (base + speed * days) % 360;
    const planets = planetsData.map(p => {
        let deg = 0;
        switch(p.id) {
            case 'sun': deg = getPos(280.46, 0.9856); break;
            case 'moon': deg = getPos(218.31, 13.176); break;
            case 'mercury': deg = getPos(252.25, 4.092); break;
            case 'venus': deg = getPos(181.98, 1.602); break;
            case 'mars': deg = getPos(355.43, 0.524); break;
            case 'jupiter': deg = getPos(34.35, 0.083); break;
            case 'saturn': deg = getPos(50.07, 0.033); break;
            case 'uranus': deg = getPos(313.23, 0.0117); break;
            case 'neptune': deg = getPos(304.88, 0.0059); break;
            case 'pluto': deg = getPos(238.92, 0.0039); break;
        }
        if(deg < 0) deg += 360;
        return { ...p, deg, sign: zodiacSigns[Math.floor(deg/30)] };
    });

    // 上升点估算
    const hour = parseInt(tStr.split(':')[0]);
    const sunDeg = planets.find(p=>p.id==='sun').deg;
    const ascDeg = (sunDeg - 180 + hour * 15 + 360) % 360; // 粗略估算
    const ascSign = zodiacSigns[Math.floor(ascDeg/30)];

    // 绘制结果
    document.getElementById('chart-result').classList.remove('hidden');
    document.getElementById('res-asc').innerText = ascSign.name;
    document.getElementById('res-sun-full').innerText = planets.find(p=>p.id==='sun').sign.name;
    document.getElementById('res-moon-full').innerText = planets.find(p=>p.id==='moon').sign.name;
    
    drawChart(planets, ascDeg);
    renderAnalysis(planets, ascSign);
}

function drawChart(planets, ascDeg) {
    const canvas = document.getElementById('astro-wheel');
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height, cx = w/2, cy = h/2, r = w*0.45;
    
    ctx.clearRect(0,0,w,h);
    ctx.save();
    ctx.translate(cx, cy);
    // 旋转让上升点在左侧(9点钟)
    const rot = (180 - ascDeg) * Math.PI/180;
    ctx.rotate(rot);

    // 绘制12星座
    for(let i=0; i<12; i++) {
        const a1 = i*30*Math.PI/180, a2 = (i+1)*30*Math.PI/180;
        ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0,0,r,a1,a2);
        ctx.fillStyle = i%2===0 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)';
        ctx.fill(); ctx.stroke();
        
        // 符号
        ctx.save();
        const mid = a1 + 15*Math.PI/180;
        ctx.translate((r-30)*Math.cos(mid), (r-30)*Math.sin(mid));
        ctx.rotate(-rot);
        ctx.fillStyle = zodiacSigns[i].element==='fire'?'#ff6b6b':zodiacSigns[i].element==='water'?'#4ecdc4':zodiacSigns[i].element==='air'?'#ffe66d':'#95a5a6';
        ctx.font = '24px Arial'; ctx.textAlign='center'; ctx.textBaseline='middle';
        ctx.fillText(zodiacSigns[i].icon, 0, 0);
        ctx.restore();
    }

    // 绘制行星
    const rIn = r*0.7;
    ctx.beginPath(); ctx.arc(0,0,rIn,0,Math.PI*2); ctx.strokeStyle='rgba(255,215,0,0.3)'; ctx.stroke();
    
    planets.forEach((p, i) => {
        const rad = p.deg * Math.PI/180;
        const dist = rIn - (i*12); // 错开轨道防止重叠
        const x = dist * Math.cos(rad), y = dist * Math.sin(rad);
        
        ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(x,y); 
        ctx.strokeStyle='rgba(255,255,255,0.1)'; ctx.stroke();
        
        ctx.save();
        ctx.translate(x,y); ctx.rotate(-rot);
        ctx.fillStyle='#fff'; ctx.font='16px Arial'; ctx.fillText(p.icon, -8, 5);
        ctx.restore();
    });
    
    ctx.restore();
}

function renderAnalysis(planets, ascSign) {
    const list = document.getElementById('chart-analysis-list');
    list.innerHTML = `
        <div class="analysis-card">
            <div class="ac-header"><span class="ac-title">🏹 上升星座 ${ascSign.name}</span></div>
            <div class="ac-text">你给人的第一印象是${ascSign.desc}。</div>
        </div>
    `;
    planets.forEach(p => {
        list.innerHTML += `
            <div class="analysis-card">
                <div class="ac-header"><span class="ac-title">${p.icon} ${p.name} 落在 ${p.sign.name}</span></div>
                <div class="ac-text">在${p.desc}方面，你表现出${p.sign.tags[0]}的特质。${p.sign.desc}</div>
            </div>
        `;
    });
}