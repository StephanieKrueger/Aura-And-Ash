(function(){
  'use strict';

  /* ---------- HEADER ---------- */
  var hdr = document.getElementById('hdr');
  if (hdr){
    window.addEventListener('scroll', function(){
      hdr.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* ---------- FADE IN ON SCROLL ---------- */
  var fadeObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: .12 });
  document.querySelectorAll('.fade').forEach(function(el){
    fadeObserver.observe(el);
  });

  /* ---------- EMBER PARTICLES ---------- */
  var emberBox = document.getElementById('embers');
  if (emberBox && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var emberCount = window.innerWidth < 700 ? 14 : 26;
    for (var i = 0; i < emberCount; i++){
      var ember = document.createElement('div');
      ember.className = 'ember';
      var dur = 9 + Math.random() * 12;
      ember.style.left = (Math.random() * 100) + '%';
      ember.style.animationDuration = dur + 's';
      ember.style.animationDelay = (Math.random() * dur) + 's';
      ember.style.setProperty('--dx', (Math.random() * 90 - 45) + 'px');
      var sz = 0.6 + Math.random() * 1.6;
      ember.style.width = sz + 'px';
      ember.style.height = sz + 'px';
      ember.style.opacity = 0.3 + Math.random() * 0.6;
      if (Math.random() > 0.72) ember.style.background = 'rgba(138,154,128,.8)';
      emberBox.appendChild(ember);
    }
  }

  /* ---------- HERO MOUSE PARALLAX ---------- */
  var heroEl = document.querySelector('.hero');
  var orbEls = document.querySelectorAll('.hero-bg .orb');
  if (heroEl && orbEls.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var ticking = false;
    heroEl.addEventListener('mousemove', function(ev){
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function(){
        var r = heroEl.getBoundingClientRect();
        var x = (ev.clientX - r.left) / r.width - 0.5;
        var y = (ev.clientY - r.top) / r.height - 0.5;
        orbEls.forEach(function(o, idx){
          var depth = (idx + 1) * 14;
          o.style.marginLeft = (x * depth) + 'px';
          o.style.marginTop = (y * depth) + 'px';
        });
        ticking = false;
      });
    });
    heroEl.addEventListener('mouseleave', function(){
      orbEls.forEach(function(o){
        o.style.marginLeft = '0px';
        o.style.marginTop = '0px';
      });
    });
  }

  /* ---------- SCHEDULE DATA ---------- */
  var days = [
    { key:'Mon', label:'Monday',    num:'14' },
    { key:'Tue', label:'Tuesday',   num:'15' },
    { key:'Wed', label:'Wednesday', num:'16' },
    { key:'Thu', label:'Thursday',  num:'17' },
    { key:'Fri', label:'Friday',    num:'18' },
    { key:'Sat', label:'Saturday',  num:'19' }
  ];

  var weeks = [
    {
      label:'Sep 14 – 19',
      data:{
        Mon:[{t:'6:30 AM',n:'Sunrise Slow Flow',m:'Maya Reyes · 60 min',k:'class'},
             {t:'12:00 PM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'},
             {t:'6:00 PM',n:'Deep Stretch',m:'Tomas Neri · 75 min',k:'class'}],
        Tue:[{t:'7:00 AM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'},
             {t:'5:30 PM',n:'Power Vinyasa',m:'Jules Ahn · 60 min',k:'class'},
             {t:'8:00 PM',n:'Sound Bath Meditation',m:'Devin Kaur · 45 min',k:'sound'}],
        Wed:[{t:'6:30 AM',n:'Slow Flow Vinyasa',m:'Maya Reyes · 60 min',k:'class'},
             {t:'10:00 AM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'},
             {t:'7:00 PM',n:'Restorative & Nidra',m:'Priya Anand · 75 min',k:'class'}],
        Thu:[{t:'7:00 AM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'},
             {t:'6:00 PM',n:'Deep Stretch',m:'Tomas Neri · 75 min',k:'class'},
             {t:'8:15 PM',n:'Candlelit Sound Bath',m:'Devin Kaur · 60 min',k:'sound'}],
        Fri:[{t:'6:30 AM',n:'Sunrise Slow Flow',m:'Maya Reyes · 60 min',k:'class'},
             {t:'12:00 PM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'},
             {t:'5:30 PM',n:'Community Flow',m:'Rotating Guest Teacher',k:'class'}],
        Sat:[{t:'9:00 AM',n:'Weekend Slow Flow',m:'Jules Ahn · 75 min',k:'class'},
             {t:'11:00 AM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'},
             {t:'4:00 PM',n:'Breathwork & Meditation',m:'Priya Anand · 60 min',k:'sound'}]
      }
    },
    {
      label:'Sep 21 – 26',
      data:{
        Mon:[{t:'6:30 AM',n:'Sunrise Slow Flow',m:'Maya Reyes · 60 min',k:'class'},
             {t:'1:00 PM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'},
             {t:'6:00 PM',n:'Yin & Release',m:'Priya Anand · 75 min',k:'class'}],
        Tue:[{t:'7:00 AM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'},
             {t:'5:30 PM',n:'Power Vinyasa',m:'Jules Ahn · 60 min',k:'class'},
             {t:'8:00 PM',n:'Sound Bath Meditation',m:'Devin Kaur · 45 min',k:'sound'}],
        Wed:[{t:'6:30 AM',n:'Slow Flow Vinyasa',m:'Maya Reyes · 60 min',k:'class'},
             {t:'11:00 AM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'},
             {t:'7:00 PM',n:'Teacher Training Lab',m:'Resident Cohort · 90 min',k:'class'}],
        Thu:[{t:'7:00 AM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'},
             {t:'6:00 PM',n:'Deep Stretch',m:'Tomas Neri · 75 min',k:'class'},
             {t:'8:15 PM',n:'Candlelit Sound Bath',m:'Devin Kaur · 60 min',k:'sound'}],
        Fri:[{t:'6:30 AM',n:'Sunrise Slow Flow',m:'Maya Reyes · 60 min',k:'class'},
             {t:'12:00 PM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'},
             {t:'5:30 PM',n:'Community Flow',m:'Rotating Guest Teacher',k:'class'}],
        Sat:[{t:'8:30 AM',n:'Full Studio Buyout',m:'Private Event · Closed to public',k:'open'},
             {t:'2:00 PM',n:'Open Studio Time',m:'Self-led · mats included',k:'open'}]
      }
    }
  ];

  var weekIdx = 0;
  var currentFilter = 'all';

  var gridEl = document.getElementById('grid');
  var weekLabel = document.getElementById('weekLabel');

  function renderGrid(){
    var week = weeks[weekIdx];
    if (weekLabel) weekLabel.textContent = week.label;
    if (!gridEl) return;
    gridEl.innerHTML = '';

    days.forEach(function(d){
      var col = document.createElement('div');
      col.className = 'day-col';

      var head = document.createElement('div');
      head.className = 'day-name';
      head.innerHTML = d.key + '<b>' + d.num + '</b>';
      col.appendChild(head);

      var slots = week.data[d.key] || [];
      if (currentFilter !== 'all'){
        slots = slots.filter(function(s){ return s.k === currentFilter; });
      }

      if (!slots.length){
        var emptyEl = document.createElement('div');
        emptyEl.className = 'empty';
        emptyEl.textContent = 'No sessions';
        col.appendChild(emptyEl);
      } else {
        slots.forEach(function(s){
          var slotEl = document.createElement('div');
          slotEl.className = 'slot' + (s.k === 'open' ? ' open' : '');
          slotEl.innerHTML =
            '<div class="t">' + s.t + '</div>' +
            '<div class="n">' + s.n + '</div>' +
            '<div class="m">' + s.m + '</div>';
          slotEl.addEventListener('click', function(){ openSlot(s, d); });
          col.appendChild(slotEl);
        });
      }
      gridEl.appendChild(col);
    });
  }

  /* ---------- FILTERS ---------- */
  var filterBar = document.getElementById('filters');
  if (filterBar){
    filterBar.addEventListener('click', function(e){
      var btn = e.target.closest('.chip');
      if (!btn) return;
      document.querySelectorAll('.chip').forEach(function(c){ c.classList.remove('active'); });
      btn.classList.add('active');
      currentFilter = btn.dataset.f;
      renderGrid();
    });
  }

  /* ---------- WEEK NAV ---------- */
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');
  if (prevBtn){
    prevBtn.addEventListener('click', function(){
      weekIdx = (weekIdx - 1 + weeks.length) % weeks.length;
      renderGrid();
    });
  }
  if (nextBtn){
    nextBtn.addEventListener('click', function(){
      weekIdx = (weekIdx + 1) % weeks.length;
      renderGrid();
    });
  }

  /* ---------- MODAL ---------- */
  var overlay = document.getElementById('overlay');
  var modal = document.getElementById('modal');

  function closeModal(){
    if (overlay) overlay.classList.remove('show');
  }

  function confirmBooking(){
    var input = document.getElementById('em');
    if (!input) return;
    var val = (input.value || '').trim();
    if (!val || val.indexOf('@') === -1){
      input.style.borderColor = '#c1704f';
      input.placeholder = 'Please enter a valid email';
      return;
    }
    modal.innerHTML =
      '<button class="close" onclick="closeModal()">×</button>' +
      '<div class="confirm">' +
        '<div class="mark">✓</div>' +
        '<h3>You\'re on the list.</h3>' +
        '<p>We\'ve sent a confirmation to <strong style="color:#e8e0d4">' + val + '</strong>. ' +
        'Our studio manager will follow up within one business day.</p>' +
      '</div>';
  }

  function openSlot(s, d){
    var isOpen = s.k === 'open';
    modal.innerHTML =
      '<button class="close" onclick="closeModal()">×</button>' +
      '<div class="sub">' + d.label + ' · ' + s.t + '</div>' +
      '<h3>' + s.n + '</h3>' +
      '<div class="row"><span>' + (isOpen ? 'Type' : 'Instructor') + '</span><span>' + s.m + '</span></div>' +
      '<div class="row"><span>Duration</span><span>' + (isOpen ? 'Flexible block' : 'As listed') + '</span></div>' +
      '<div class="row"><span>' + (isOpen ? 'Rate' : 'Drop-in') + '</span><span>' + (isOpen ? 'From $45 / hr' : '$24 · free for residents') + '</span></div>' +
      '<div class="field"><label>Your email</label><input type="email" id="em" placeholder="you@studio.com"></div>' +
      '<button class="btn btn-glow" id="modalSubmit">' +
        (isOpen ? 'Inquire About This Slot' : 'Reserve My Spot') +
      '</button>';
    overlay.classList.add('show');
    var submit = document.getElementById('modalSubmit');
    if (submit) submit.addEventListener('click', confirmBooking);
  }

  function openGeneric(){
    modal.innerHTML =
      '<button class="close" onclick="closeModal()">×</button>' +
      '<div class="sub">Free Trial Session</div>' +
      '<h3>Stand in the Room First</h3>' +
      '<div class="row"><span>Format</span><span>30-minute walkthrough</span></div>' +
      '<div class="row"><span>Availability</span><span>Tue–Thu, 10a – 4p</span></div>' +
      '<div class="row"><span>Cost</span><span>Complimentary</span></div>' +
      '<div class="field"><label>Your email</label><input type="email" id="em" placeholder="you@studio.com"></div>' +
      '<button class="btn btn-glow" id="modalSubmit">Book a Free Trial</button>';
    overlay.classList.add('show');
    var submit = document.getElementById('modalSubmit');
    if (submit) submit.addEventListener('click', confirmBooking);
  }

  if (overlay){
    overlay.addEventListener('click', function(e){
      if (e.target === overlay) closeModal();
    });
  }
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeModal();
  });

  /* expose functions required by inline event handlers */
  window.closeModal = closeModal;
  window.openGeneric = openGeneric;

  /* ---------- INIT ---------- */
  renderGrid();

})();