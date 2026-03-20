// Software: GDI-JS
// Version: 2.3.7
// Author: Parveen Bhadoo
// Website: https://gdi.js.org

// add multiple serviceaccounts as {}, {}, {}, random account will be selected by each time app is opened.

const environment = 'production'; // This Variable Decides the environment of the app. 'production' or 'development' or 'local'
 
const serviceaccounts = [];
const randomserviceaccount = serviceaccounts[Math.floor(Math.random() * serviceaccounts.length)]; // DO NOT TOUCH THIS
const domains_for_dl = [''] // add multiple cloudflare addresses to balance the load on download/stream servers, eg. ['https://testing.fetchgoogleapi.workers.dev', 'https://testing2.fetchgoogleapi2.workers.dev']
const domain_for_dl = domains_for_dl[Math.floor(Math.random() * domains_for_dl.length)]; // DO NOT TOUCH THIS
const blocked_region = ['']; // add regional codes seperated by comma, eg. ['IN', 'US', 'PK']
const blocked_asn = []; // add ASN numbers from http://www.bgplookingglass.com/list-of-autonomous-system-numbers, eg. [16509, 12345]
const authConfig = {
  "siteName": "Google Drive Index", // Website name
  "client_id": "https://70048807407-h7bkancut04b1fdmuia60em9jma2lf6m.apps.googleusercontent.com", // Client id from Google Cloud Console
  "client_secret": "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", // Client Secret from Google Cloud Console
  "refresh_token": "1//0gj_Rs4CNMt3WCgYIARAAGBASNgF-L9IrH5ito9OeuC-DDuh_ae120Ng29AVOVr-AATchDm0XbCcSidElNZgBQ1DeZaLxMHaoIg", // Authorize token
  "service_account": false, // true if you're using Service Account instead of user account
  "service_account_json": randomserviceaccount, // don't touch this one
  "files_list_page_size": 100,
  "search_result_list_page_size": 100,
  "enable_cors_file_down": false,
  "enable_password_file_verify": false, // support for .password file not working right now
  "direct_link_protection": false, // protects direct links with Display UI
  "disable_anonymous_download": false, // disables direct links without session
  "file_link_expiry": 7, // expire file link in set number of days
  "search_all_drives": true, // search all of your drives instead of current drive if set to true
  "enable_login": true, // set to true if you want to add login system
  "enable_signup": false, // set to true if you want to add signup system
  "enable_social_login": false, // set to true if you want to add social login system
  "google_client_id_for_login": "", // Google Client ID for Login
  "google_client_secret_for_login": "", // Google Client Secret for Login
  "redirect_domain": "", // Domain for login redirect eg. https://example.com
  "login_database": "Local", // KV or Local
  "login_days": 7, // days to keep logged in
  "enable_ip_lock": false, // set to true if you want to lock user downloads to user IP
  "single_session": false, // set to true if you want to allow only one session per user
  "ip_changed_action": false, // set to true if you want to logout user if IP changed
  "users_list": [{
      "username": "admin",
      "password": "admin",
    },
    {
      "username": "admin1",
      "password": "admin1",
    }
  ],
  "roots": [
    {
      "id": "",
      "name": "00-MUST-HAVE",
      "protect_file_link": false
  },
  ]
};
const crypto_base_key = "3225f86e99e205347b4310e437253bfd" // Example 256 bit key used, generate your own.
const hmac_base_key = "4d1fbf294186b82d74fff2494c04012364200263d6a36123db0bd08d6be1423c" // Example 256 bit key used, generate your own.
const encrypt_iv = new Uint8Array([247, 254, 106, 195, 32, 148, 131, 244, 222, 133, 26, 182, 20, 138, 215, 81]); // Example 128 bit IV used, generate your own.
const uiConfig = {
  "theme": "flatly", // switch between themes, default set to slate, select from https://gitlab.com/GoogleDriveIndex/Google-Drive-Index
  "version": "2.3.7", // don't touch this one. get latest code using generator at https://bdi-generator.hashhackers.com
  // If you're using Image then set to true, If you want text then set it to false
  "logo_image": false, // true if you're using image link in next option.
  "logo_height": "", // only if logo_image is true
  "logo_width": "100px", // only if logo_image is true
  "favicon": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.2.3/images/favicon.ico",
  // if logo is true then link otherwise just text for name
  "logo_link_name": "AnimeToki Index",
  "login_image": "https://i.imgur.com/5fHELJr.png", // Login page logo image
  "fixed_header": true, // If you want the footer to be flexible or fixed.
  "header_padding": "80", // Value 80 for fixed header, Value 20 for flexible header. Required to be changed accordingly in some themes.
  "nav_link_1": "Home", // change navigation link name
  "nav_link_3": "Current Path", // change navigation link name
  "nav_link_4": "Contact", // change navigation link name
  "fixed_footer": false, // If you want the footer to be flexible or fixed.
  "hide_footer": false, // hides the footer from site entirely.
  "header_style_class": "navbar-light", // navbar-dark bg-primary || navbar-dark bg-dark || navbar-light bg-light
  "footer_style_class": "", // bg-primary || bg-dark || bg-light
  "css_a_tag_color": "#b85c00", // Color Name or Hex Code eg. #ffffff
  "css_p_tag_color": "#4a2800", // Color Name or Hex Code eg. #ffffff
  "folder_text_color": "#b85c00", // Color Name or Hex Code eg. #ffffff
  "loading_spinner_class": "text-warning", // https://getbootstrap.com/docs/5.0/components/spinners/#colors
  "search_button_class": "btn btn-warning", // https://getbootstrap.com/docs/5.0/components/buttons/#examples
  "path_nav_alert_class": "alert alert-warning", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
  "file_view_alert_class": "alert alert-warning", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
  "file_count_alert_class": "alert alert-light", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
  "contact_link": "https://telegram.dog/Telegram", // Link to Contact Button on Menu
  "copyright_year": "2050", // year of copyright, can be anything like 2015 - 2020 or just 2020
  "company_name": "AnimeToki Index", // Name next to copyright
  "company_link": "https://telegram.dog/Telegram", // link of copyright name
  "credit": true, // Set this to true to give us credit
  "display_size": true, // Set this to false to hide display file size
  "display_time": false, // Set this to false to hide display modified time for folder and files
  "display_download": true, // Set this to false to hide download icon for folder and files on main index
  "disable_player": false, // Set this to true to hide audio and video players
  "disable_video_download": false, // Remove Download, Copy Button on Videos
  "allow_selecting_files": true, // Disable Selecting Files to Download in Bulk
  "second_domain_for_dl": false, // If you want to display other URL for Downloading to protect your main domain.
  "poster": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.2.3/images/poster.jpg", // Video poster URL or see Readme to how to load from Drive
  "audioposter": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.2.3/images/music.jpg", // Video poster URL or see Readme to how to load from Drive
  "jsdelivr_cdn_src": "https://cdn.jsdelivr.net/npm/@googledrive/index", // If Project is Forked, then enter your GitHub repo
  "render_head_md": true, // Render Head.md
  "render_readme_md": true, // Render Readme.md
  "unauthorized_owner_link": "https://telegram.dog/Telegram", // Unauthorized Error Page Link to Owner
  "unauthorized_owner_email": "abuse@telegram.org", // Unauthorized Error Page Owner Email
  "downloaddomain": domain_for_dl, // Ignore this and set domains at top of this page after service accounts.
  "show_logout_button": authConfig.enable_login ? true : false, // set to true if you want to add logout button
};

const player_config = {
  "player": "videojs", // videojs || plyr || dplayer || jwplayer
  "videojs_version": "8.3.0", // Change videojs version in future when needed.
  "plyr_io_version": "3.7.8",
  "jwplayer_version": "8.16.2"
}

// DON'T TOUCH BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING
var gds = [];
const drive_list = authConfig.roots.map(it => it.id)
let app_js_file
if (environment === 'production') {
  app_js_file = uiConfig.jsdelivr_cdn_src + '@' + uiConfig.version + '/src/app.min.js'
} else if (environment === 'development') {
  app_js_file = '/app.js'
} else if (environment === 'local') {
  app_js_file = 'http://127.0.0.1:5500/src/app.js'
}

function html(current_drive_order = 0, model = {}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <title>${authConfig.siteName}</title>
  <meta name="robots" content="noindex" />
  <link rel="icon" href="${uiConfig.favicon}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet">
  <script>
  window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
  window.MODEL = JSON.parse('${JSON.stringify(model)}');
  window.current_drive_order = ${current_drive_order};
  window.UI = JSON.parse('${JSON.stringify(uiConfig)}');
  window.player_config = JSON.parse('${JSON.stringify(player_config)}');
  </script>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/flatly/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <script src="${app_js_file}"></script>
  <script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.12.313/build/pdf.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked@5.1.1/lib/marked.umd.min.js"></script>
  <style>
    :root {
      --cream: #fdf3e7;
      --cream-dark: #f5e6d0;
      --orange: #f07b26;
      --orange-light: #f9a05a;
      --orange-dark: #c45f10;
      --brown: #4a2800;
      --brown-light: #7a4820;
      --card-bg: #fffaf4;
      --dot-color: #e8c9a0;
      --shadow: 0 4px 20px rgba(180,100,20,0.10);
      --radius: 18px;
    }

    * { box-sizing: border-box; }

    html, body {
      background-color: var(--cream);
      font-family: 'Nunito', sans-serif;
      color: var(--brown);
      min-height: 100vh;
    }

    /* Polka dot background */
    body {
      background-image: radial-gradient(circle, var(--dot-color) 1.5px, transparent 1.5px);
      background-size: 22px 22px;
      background-color: var(--cream);
    }

    /* ── Navbar ── */
    .navbar {
      background: rgba(253,243,231,0.92) !important;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 2px solid var(--orange-light);
      padding: 10px 20px;
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      box-shadow: 0 2px 16px rgba(180,100,20,0.10);
    }

    .navbar-brand {
      font-family: 'Quicksand', sans-serif;
      font-weight: 700;
      font-size: 1.4rem;
      color: var(--orange-dark) !important;
      display: flex;
      align-items: center;
      gap: 8px;
      letter-spacing: -0.3px;
    }

    .navbar-brand .brand-icon {
      width: 34px; height: 34px;
      background: var(--orange);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: white;
      font-size: 16px;
      flex-shrink: 0;
    }

    .navbar-brand .brand-sub {
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 3px;
      color: var(--orange);
      text-transform: uppercase;
      display: block;
      line-height: 1;
    }

    .navbar-brand .brand-name {
      font-size: 1.2rem;
      font-weight: 800;
      color: var(--brown);
      display: block;
      line-height: 1;
    }

    .nav-link {
      color: var(--brown-light) !important;
      font-weight: 600;
      font-size: 0.9rem;
      padding: 6px 14px !important;
      border-radius: 20px;
      transition: all 0.2s;
    }

    .nav-link:hover {
      background: var(--cream-dark);
      color: var(--orange-dark) !important;
    }

    .navbar-toggler {
      border: 2px solid var(--orange-light);
      border-radius: 10px;
    }

    /* Search bar */
    .at-search-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .at-search-input {
      background: var(--cream-dark);
      border: 2px solid var(--orange-light);
      border-radius: 24px;
      padding: 6px 18px;
      font-family: 'Nunito', sans-serif;
      font-size: 0.88rem;
      color: var(--brown);
      outline: none;
      transition: border-color 0.2s;
      width: 200px;
    }

    .at-search-input:focus {
      border-color: var(--orange);
      background: white;
    }

    .at-search-btn {
      background: var(--orange);
      color: white;
      border: none;
      border-radius: 24px;
      padding: 6px 18px;
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      transition: background 0.2s;
    }

    .at-search-btn:hover { background: var(--orange-dark); }

    /* ── Main content area ── */
    #content {
      padding-top: 88px;
      padding-bottom: 80px;
      min-height: 100vh;
    }

    .container { max-width: 900px; }

    /* ── Breadcrumb ── */
    .at-breadcrumb {
      background: var(--card-bg);
      border: 1.5px solid var(--orange-light);
      border-radius: var(--radius);
      padding: 12px 20px;
      margin-bottom: 16px;
      box-shadow: var(--shadow);
    }

    .breadcrumb { margin: 0; flex-wrap: wrap; }
    .breadcrumb-item a { color: var(--orange); font-weight: 600; text-decoration: none; }
    .breadcrumb-item.active { color: var(--brown-light); font-weight: 600; }
    .breadcrumb-item + .breadcrumb-item::before { color: var(--orange-light); content: "›"; font-size: 1.1rem; }

    /* ── File list ── */
    .list-group { gap: 8px; display: flex; flex-direction: column; }

    .list-group-item {
      background: var(--card-bg) !important;
      border: 1.5px solid var(--cream-dark) !important;
      border-radius: var(--radius) !important;
      padding: 14px 18px !important;
      color: var(--brown) !important;
      font-weight: 600;
      transition: all 0.2s;
      box-shadow: var(--shadow);
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .list-group-item:hover {
      border-color: var(--orange-light) !important;
      background: white !important;
      transform: translateY(-1px);
      box-shadow: 0 6px 24px rgba(180,100,20,0.14);
    }

    .list-group-item a {
      color: var(--brown) !important;
      text-decoration: none;
      font-weight: 700;
      flex: 1;
    }

    .list-group-item a:hover { color: var(--orange-dark) !important; }

    .list-group-item .item-icon {
      width: 38px; height: 38px;
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
    }

    .item-icon.folder-icon { background: #fff0e0; color: var(--orange); }
    .item-icon.file-icon   { background: #f5f5ff; color: #7070cc; }
    .item-icon.video-icon  { background: #fff0e0; color: var(--orange-dark); }
    .item-icon.audio-icon  { background: #f0fff5; color: #30a060; }
    .item-icon.img-icon    { background: #fff5f0; color: #e06060; }

    .item-meta {
      font-size: 0.78rem;
      color: var(--brown-light);
      font-weight: 500;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }

    .item-size-badge {
      background: var(--cream-dark);
      color: var(--brown-light);
      border-radius: 10px;
      padding: 2px 10px;
      font-size: 0.75rem;
      font-weight: 700;
    }

    .item-dl-btn {
      color: var(--orange) !important;
      background: none;
      border: none;
      padding: 4px 8px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 1.1rem;
      transition: all 0.15s;
    }

    .item-dl-btn:hover { background: #fff0e0; color: var(--orange-dark) !important; }

    /* File count bar */
    #count {
      background: var(--card-bg) !important;
      border: 1.5px solid var(--cream-dark) !important;
      border-radius: var(--radius) !important;
      color: var(--brown-light) !important;
      font-weight: 600;
      font-size: 0.88rem;
      margin-top: 16px;
      text-align: center;
      padding: 10px;
      box-shadow: var(--shadow);
    }

    /* ── Alerts / path nav ── */
    .alert-primary, .alert-warning {
      background: #fff7ed !important;
      border: 1.5px solid var(--orange-light) !important;
      border-radius: var(--radius) !important;
      color: var(--brown) !important;
    }

    .alert-danger {
      background: #fff5f5 !important;
      border: 1.5px solid #f5b0b0 !important;
      border-radius: var(--radius) !important;
      color: #8b2020 !important;
    }

    .alert-secondary, .alert-light {
      background: var(--card-bg) !important;
      border: 1.5px solid var(--cream-dark) !important;
      border-radius: var(--radius) !important;
      color: var(--brown-light) !important;
    }

    /* ── Buttons ── */
    .btn-warning, .btn-danger, .btn-primary {
      background: var(--orange) !important;
      border: none !important;
      border-radius: 20px !important;
      font-family: 'Nunito', sans-serif !important;
      font-weight: 700 !important;
      color: white !important;
      padding: 8px 22px !important;
      transition: background 0.2s !important;
    }

    .btn-warning:hover, .btn-danger:hover, .btn-primary:hover {
      background: var(--orange-dark) !important;
      color: white !important;
    }

    .btn-outline-warning, .btn-outline-primary {
      background: transparent !important;
      border: 2px solid var(--orange) !important;
      border-radius: 20px !important;
      font-family: 'Nunito', sans-serif !important;
      font-weight: 700 !important;
      color: var(--orange) !important;
    }

    .btn-outline-warning:hover, .btn-outline-primary:hover {
      background: var(--orange) !important;
      color: white !important;
    }

    /* ── Modal ── */
    .modal-content {
      border-radius: var(--radius) !important;
      border: 2px solid var(--orange-light) !important;
      background: var(--cream) !important;
      background-image: radial-gradient(circle, var(--dot-color) 1.5px, transparent 1.5px);
      background-size: 22px 22px;
      font-family: 'Nunito', sans-serif;
    }

    .modal-header {
      border-bottom: 2px solid var(--cream-dark) !important;
      padding: 18px 24px !important;
    }

    .modal-title { font-weight: 800; color: var(--brown); }

    .modal-footer {
      border-top: 2px solid var(--cream-dark) !important;
      gap: 10px;
    }

    /* ── Video / audio player area ── */
    .plyr, video, audio {
      border-radius: var(--radius);
      overflow: hidden;
    }

    /* ── Loading spinner overlay ── */
    .loading {
      position: fixed; z-index: 9999;
      height: 100vh; width: 100vw;
      top: 0; left: 0;
      display: flex; align-items: center; justify-content: center;
      flex-direction: column;
      background: rgba(253,243,231,0.88);
      backdrop-filter: blur(6px);
    }

    .loading-inner {
      width: 56px; height: 56px;
      border: 5px solid var(--cream-dark);
      border-top-color: var(--orange);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-bottom: 16px;
    }

    .loading-text {
      font-family: 'Quicksand', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      color: var(--orange-dark);
      letter-spacing: 1px;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    /* ── Footer ── */
    footer {
      background: var(--cream-dark) !important;
      border-top: 2px solid var(--orange-light);
      padding: 20px 0 !important;
      font-family: 'Nunito', sans-serif;
    }

    footer p, footer a {
      color: var(--brown-light) !important;
      font-size: 0.85rem;
      font-weight: 600;
    }

    footer a:hover { color: var(--orange-dark) !important; }

    /* ── Anime mascot ── */
    .at-mascot {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 180px;
      pointer-events: none;
      z-index: 50;
      opacity: 0.92;
    }

    /* ── NOW PLAYING badge ── */
    .now-playing-badge {
      display: inline-block;
      background: var(--orange);
      color: white;
      border-radius: 20px;
      padding: 4px 18px;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin: 10px 0 6px;
    }

    /* ── Scrollbar ── */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--cream); }
    ::-webkit-scrollbar-thumb { background: var(--orange-light); border-radius: 10px; }

    /* ── Responsive ── */
    @media (max-width: 576px) {
      .at-mascot { width: 120px; }
      .at-search-input { width: 130px; }
      .navbar-brand .brand-name { font-size: 1rem; }
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid" style="max-width:960px; margin:0 auto;">
      <a class="navbar-brand" href="/">
        <div class="brand-icon">🪶</div>
        <div>
          <span class="brand-name">ANIMETOKI</span>
          <span class="brand-sub">Index</span>
        </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
        <span style="font-size:1.3rem; color:var(--orange);">☰</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="/">🏠 Home</a></li>
          <li class="nav-item"><a class="nav-link" href="${uiConfig.contact_link}" target="_blank">📬 Contact</a></li>
          ${uiConfig.show_logout_button ? '<li class="nav-item"><a class="nav-link" href="/logout">🚪 Logout</a></li>' : ''}
        </ul>
        <div class="at-search-wrap">
          <input class="at-search-input" id="search_bar_input" name="q" type="search" placeholder="🔍 Search anime..." autocomplete="off">
          <button class="at-search-btn" onclick="if($('#search_bar_input').val()){window.location.href='/0:search?q='+encodeURIComponent($('#search_bar_input').val());}">Search</button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Main content -->
  <div id="content">
    <div class="container">
      <!-- Breadcrumb -->
      <div class="at-breadcrumb">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb" id="folderne">
            <li class="breadcrumb-item"><a href="/">🏠 Home</a></li>
          </ol>
        </nav>
      </div>

      <!-- File list -->
      <div id="list" class="list-group text-break"></div>

      <!-- Count -->
      <div class="alert text-center" id="count" style="display:none;">
        Total <span id="n_drives" class="fw-bold"></span>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="SearchModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="SearchModelLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="SearchModelLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modal-body-space"></div>
        <div class="modal-footer" id="modal-body-space-buttons"></div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer style="left:0;bottom:0;width:100%;${uiConfig.fixed_footer ? 'position:fixed;' : ''}${uiConfig.hide_footer ? 'display:none;' : 'display:block;'}">
    <div class="container text-center">
      <p style="margin:0;">
        🌸 © ${uiConfig.copyright_year} <a href="${uiConfig.company_link}" target="_blank">${uiConfig.company_name}</a> — All Rights Reserved.
        ${uiConfig.credit ? '&nbsp;|&nbsp; Built with ❤️ on <a href="https://www.npmjs.com/package/@googledrive/index" target="_blank">GDI-JS</a>' : ''}
      </p>
    </div>
  </footer>

  <!-- Anime mascot -->
  <img class="at-mascot" src="https://i.imgur.com/5fHELJr.png" alt="mascot" onerror="this.style.display='none'">

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
</body>
</html>`;
};

const homepage = `<!DOCTYPE html>
<html lang="en">
   <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>${authConfig.siteName}</title>
    <meta name="robots" content="noindex">
    <link rel="icon" href="${uiConfig.favicon}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet">
    <script>
      window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
      window.UI = JSON.parse('${JSON.stringify(uiConfig)}');
    </script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/flatly/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <style>
      :root {
        --cream:#fdf3e7;--cream-dark:#f5e6d0;--orange:#f07b26;--orange-light:#f9a05a;--orange-dark:#c45f10;--brown:#4a2800;--brown-light:#7a4820;--card-bg:#fffaf4;--dot-color:#e8c9a0;--shadow:0 4px 20px rgba(180,100,20,0.10);--radius:18px;
      }
      *{box-sizing:border-box;}
      html,body{background-color:var(--cream);font-family:'Nunito',sans-serif;color:var(--brown);min-height:100vh;}
      body{background-image:radial-gradient(circle,var(--dot-color) 1.5px,transparent 1.5px);background-size:22px 22px;background-color:var(--cream);}
      .navbar{background:rgba(253,243,231,0.92)!important;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:2px solid var(--orange-light);padding:10px 20px;position:fixed;top:0;left:0;right:0;z-index:1000;box-shadow:0 2px 16px rgba(180,100,20,0.10);}
      .navbar-brand{font-family:'Quicksand',sans-serif;font-weight:700;font-size:1.4rem;color:var(--orange-dark)!important;display:flex;align-items:center;gap:8px;text-decoration:none;}
      .brand-icon{width:34px;height:34px;background:var(--orange);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:16px;flex-shrink:0;}
      .brand-sub{font-size:0.65rem;font-weight:600;letter-spacing:3px;color:var(--orange);text-transform:uppercase;display:block;line-height:1;}
      .brand-name{font-size:1.2rem;font-weight:800;color:var(--brown);display:block;line-height:1;}
      .nav-link{color:var(--brown-light)!important;font-weight:600;font-size:0.9rem;padding:6px 14px!important;border-radius:20px;transition:all 0.2s;}
      .nav-link:hover{background:var(--cream-dark);color:var(--orange-dark)!important;}
      .at-search-wrap{display:flex;align-items:center;gap:8px;}
      .at-search-input{background:var(--cream-dark);border:2px solid var(--orange-light);border-radius:24px;padding:6px 18px;font-family:'Nunito',sans-serif;font-size:0.88rem;color:var(--brown);outline:none;transition:border-color 0.2s;width:200px;}
      .at-search-input:focus{border-color:var(--orange);background:white;}
      .at-search-btn{background:var(--orange);color:white;border:none;border-radius:24px;padding:6px 18px;font-family:'Nunito',sans-serif;font-weight:700;font-size:0.85rem;cursor:pointer;transition:background 0.2s;}
      .at-search-btn:hover{background:var(--orange-dark);}
      #content{padding-top:88px;padding-bottom:80px;min-height:100vh;}
      .container{max-width:900px;}
      .at-breadcrumb{background:var(--card-bg);border:1.5px solid var(--orange-light);border-radius:var(--radius);padding:12px 20px;margin-bottom:16px;box-shadow:var(--shadow);}
      .breadcrumb{margin:0;flex-wrap:wrap;}
      .breadcrumb-item a{color:var(--orange);font-weight:600;text-decoration:none;}
      .breadcrumb-item.active{color:var(--brown-light);font-weight:600;}
      .breadcrumb-item+.breadcrumb-item::before{color:var(--orange-light);content:"›";font-size:1.1rem;}
      .list-group{gap:8px;display:flex;flex-direction:column;}
      .list-group-item{background:var(--card-bg)!important;border:1.5px solid var(--cream-dark)!important;border-radius:var(--radius)!important;padding:14px 18px!important;color:var(--brown)!important;font-weight:600;transition:all 0.2s;box-shadow:var(--shadow);display:flex;align-items:center;gap:12px;}
      .list-group-item:hover{border-color:var(--orange-light)!important;background:white!important;transform:translateY(-1px);box-shadow:0 6px 24px rgba(180,100,20,0.14);}
      .list-group-item a{color:var(--brown)!important;text-decoration:none;font-weight:700;flex:1;}
      .list-group-item a:hover{color:var(--orange-dark)!important;}
      #count{background:var(--card-bg)!important;border:1.5px solid var(--cream-dark)!important;border-radius:var(--radius)!important;color:var(--brown-light)!important;font-weight:600;font-size:0.88rem;margin-top:16px;text-align:center;padding:10px;box-shadow:var(--shadow);}
      .alert-primary,.alert-warning{background:#fff7ed!important;border:1.5px solid var(--orange-light)!important;border-radius:var(--radius)!important;color:var(--brown)!important;}
      .alert-secondary,.alert-light{background:var(--card-bg)!important;border:1.5px solid var(--cream-dark)!important;border-radius:var(--radius)!important;color:var(--brown-light)!important;}
      .btn-warning,.btn-danger,.btn-primary{background:var(--orange)!important;border:none!important;border-radius:20px!important;font-family:'Nunito',sans-serif!important;font-weight:700!important;color:white!important;padding:8px 22px!important;transition:background 0.2s!important;}
      .btn-warning:hover,.btn-danger:hover,.btn-primary:hover{background:var(--orange-dark)!important;color:white!important;}
      .modal-content{border-radius:var(--radius)!important;border:2px solid var(--orange-light)!important;background:var(--cream)!important;background-image:radial-gradient(circle,var(--dot-color) 1.5px,transparent 1.5px);background-size:22px 22px;font-family:'Nunito',sans-serif;}
      .modal-header{border-bottom:2px solid var(--cream-dark)!important;padding:18px 24px!important;}
      .modal-title{font-weight:800;color:var(--brown);}
      .modal-footer{border-top:2px solid var(--cream-dark)!important;gap:10px;}
      footer{background:var(--cream-dark)!important;border-top:2px solid var(--orange-light);padding:20px 0!important;font-family:'Nunito',sans-serif;}
      footer p,footer a{color:var(--brown-light)!important;font-size:0.85rem;font-weight:600;}
      footer a:hover{color:var(--orange-dark)!important;}
      .at-mascot{position:fixed;bottom:0;right:0;width:180px;pointer-events:none;z-index:50;opacity:0.92;}
      ::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:var(--cream);}::-webkit-scrollbar-thumb{background:var(--orange-light);border-radius:10px;}
      @media(max-width:576px){.at-mascot{width:120px;}.at-search-input{width:130px;}.brand-name{font-size:1rem;}}
    </style>
   </head>
   <body>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid" style="max-width:960px;margin:0 auto;">
        <a class="navbar-brand" href="/">
          <div class="brand-icon">🪶</div>
          <div>
            <span class="brand-name">ANIMETOKI</span>
            <span class="brand-sub">Index</span>
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span style="font-size:1.3rem;color:var(--orange);">☰</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="/">🏠 ${uiConfig.nav_link_1}</a></li>
            <li class="nav-item"><a class="nav-link" href="${uiConfig.contact_link}" target="_blank">📬 ${uiConfig.nav_link_4}</a></li>
            ${uiConfig.show_logout_button ? '<li class="nav-item"><a class="nav-link" href="/logout">🚪 Logout</a></li>' : ''}
          </ul>
          <div class="at-search-wrap">
            <input class="at-search-input" id="search_bar_input" name="q" type="search" placeholder="🔍 Search anime..." autocomplete="off">
            <button class="at-search-btn" onclick="if($('#search_bar_input').val()){window.location.href='/0:search?q='+encodeURIComponent($('#search_bar_input').val());}">Search</button>
          </div>
        </div>
      </div>
    </nav>
    <div id="content">
     <div class="container">
        <div class="at-breadcrumb">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb" id="folderne">
              <li class="breadcrumb-item"><a href="/">🏠 Home</a></li>
            </ol>
          </nav>
        </div>
        <div id="list" class="list-group text-break"></div>
        <div class="text-center" id="count" style="display:none;">Total <span id="n_drives" class="fw-bold"></span> drives</div>
     </div>
    </div>
    <div class="modal fade" id="SearchModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="SearchModelLabel" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="SearchModelLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
          </div>
          <div class="modal-body" id="modal-body-space"></div>
          <div class="modal-footer" id="modal-body-space-buttons"></div>
        </div>
     </div>
    </div>
    <footer style="${uiConfig.fixed_footer ? 'position:fixed;' : ''}left:0;bottom:0;width:100%;${uiConfig.hide_footer ? 'display:none;' : 'display:block;'}">
      <div class="container text-center">
        <p style="margin:0;">
          🌸 © ${uiConfig.copyright_year} <a href="${uiConfig.company_link}" target="_blank">${uiConfig.company_name}</a> — All Rights Reserved.
          ${uiConfig.credit ? '&nbsp;|&nbsp; Built with ❤️ on <a href="https://www.npmjs.com/package/@googledrive/index" target="_blank">GDI-JS</a>' : ''}
        </p>
      </div>
    </footer>
    <img class="at-mascot" src="https://i.imgur.com/5fHELJr.png" alt="mascot" onerror="this.style.display='none'">
   </body>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/homepage.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
</html>`

const login_html = `<html lang="en">
   <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Sign in - ${authConfig.siteName}</title>
    <meta name="robots" content="noindex, nofollow">
    <meta name="googlebot" content="noindex, nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="${uiConfig.favicon}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
    <style>
      :root{--cream:#fdf3e7;--cream-dark:#f5e6d0;--orange:#f07b26;--orange-light:#f9a05a;--orange-dark:#c45f10;--brown:#4a2800;--brown-light:#7a4820;--card-bg:#fffaf4;--dot-color:#e8c9a0;--radius:18px;}
      *{box-sizing:border-box;margin:0;padding:0;}
      html,body{min-height:100vh;font-family:'Nunito',sans-serif;background-color:var(--cream);background-image:radial-gradient(circle,var(--dot-color) 1.5px,transparent 1.5px);background-size:22px 22px;display:flex;align-items:center;justify-content:center;}
      .login-wrapper{width:100%;max-width:420px;padding:24px 16px;}
      .login-card{background:var(--card-bg);border:2px solid var(--orange-light);border-radius:24px;padding:36px 32px;box-shadow:0 8px 40px rgba(180,100,20,0.14);}
      .login-logo{text-align:center;margin-bottom:24px;}
      .login-logo .brand-icon{width:52px;height:52px;background:var(--orange);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:24px;margin:0 auto 10px;}
      .login-logo .brand-name{font-family:'Quicksand',sans-serif;font-weight:800;font-size:1.6rem;color:var(--brown);}
      .login-logo .brand-sub{font-size:0.7rem;font-weight:700;letter-spacing:3px;color:var(--orange);text-transform:uppercase;}
      .login-logo img{width:80px;border-radius:50%;margin-bottom:12px;border:3px solid var(--orange-light);}
      label{display:block;font-weight:700;font-size:0.85rem;color:var(--brown-light);margin-bottom:6px;margin-top:16px;}
      input[type=text],input[type=password]{width:100%;padding:12px 18px;border:2px solid var(--cream-dark);border-radius:var(--radius);font-family:'Nunito',sans-serif;font-size:0.95rem;color:var(--brown);background:white;outline:none;transition:border-color 0.2s;}
      input[type=text]:focus,input[type=password]:focus{border-color:var(--orange);}
      .btn-login{width:100%;margin-top:22px;padding:13px;background:var(--orange);color:white;border:none;border-radius:var(--radius);font-family:'Nunito',sans-serif;font-weight:800;font-size:1rem;cursor:pointer;transition:background 0.2s;letter-spacing:0.5px;}
      .btn-login:hover{background:var(--orange-dark);}
      .btn-signup{width:100%;margin-top:10px;padding:12px;background:transparent;color:var(--orange);border:2px solid var(--orange);border-radius:var(--radius);font-family:'Nunito',sans-serif;font-weight:700;font-size:0.95rem;cursor:pointer;transition:all 0.2s;text-decoration:none;display:block;text-align:center;}
      .btn-signup:hover{background:var(--orange);color:white;}
      .btn-google{width:100%;margin-top:10px;padding:12px;background:white;color:var(--brown);border:2px solid var(--cream-dark);border-radius:var(--radius);font-family:'Nunito',sans-serif;font-weight:700;font-size:0.9rem;cursor:pointer;transition:all 0.2s;text-decoration:none;display:block;text-align:center;}
      .btn-google:hover{border-color:var(--orange-light);background:var(--cream-dark);}
      .error-box{background:#fff5f5;border:1.5px solid #f5b0b0;border-radius:12px;padding:10px 16px;color:#8b2020;font-weight:600;font-size:0.88rem;margin-top:14px;display:none;}
      .divider{text-align:center;color:var(--brown-light);font-size:0.8rem;font-weight:600;margin:16px 0;position:relative;}
      .divider::before,.divider::after{content:'';position:absolute;top:50%;width:42%;height:1px;background:var(--cream-dark);}
      .divider::before{left:0;}.divider::after{right:0;}
      .at-footer-text{text-align:center;margin-top:18px;font-size:0.82rem;color:var(--brown-light);font-weight:600;}
    </style>
    <script>
     $(document).ready(function(){
      $("#btn-login").click(function() {
        const formData = new URLSearchParams();
        formData.append('username', $("#email").val());
        formData.append('password', $("#password").val());
        fetch('/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: formData.toString()
        })
        .then(res => res.json())
        .then(data => {
          if (!data.ok) {
            $("#error-message").show().text("Invalid credentials. Please try again.");
          } else {
            window.location.reload();
          }
        });
      });
      const queryparams = new URLSearchParams(window.location.search);
      if (queryparams.get('error')) {
        $("#error-message").show().text(queryparams.get('error'));
      }
     });
    </script>
   </head>
   <body>
    <div class="login-wrapper">
      <div class="login-card">
        <div class="login-logo">
          <div class="brand-icon">🪶</div>
          <div class="brand-name">ANIMETOKI</div>
          <div class="brand-sub">Index · Sign In</div>
        </div>
        <div id="error-message" class="error-box"></div>
        <label for="email">Username</label>
        <input id="email" type="text" placeholder="Enter your username" autocomplete="username">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" autocomplete="current-password">
        <button id="btn-login" class="btn-login">Sign In →</button>
        ${authConfig.enable_signup ? '<a href="/signup" class="btn-signup">Create Account</a>' : ''}
        ${authConfig.enable_social_login ? `<div class="divider">or</div><a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=${authConfig.google_client_id_for_login}&redirect_uri=${authConfig.redirect_domain}/google_callback&response_type=code&scope=email%20profile&response_mode=query" class="btn-google">🔗 Sign in with Google</a>` : ''}
        <div class="at-footer-text">© ${uiConfig.copyright_year} ${uiConfig.company_name}</div>
      </div>
    </div>
   </body>
</html>`

const signup_html = `<html>
   <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Sign UP - ${authConfig.siteName}</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="robots" content="noindex, nofollow">
    <meta name="googlebot" content="noindex, nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="${uiConfig.favicon}">
    <script type="text/javascript" src="//code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <style id="compiled-css" type="text/css">.login,.image{min-height:100vh}.bg-image{background-image:url('https://cdn.jsdelivr.net/gh/logingateway/images@1.0/background.jpg');background-size:cover;background-position:center center}#error-message{display:none}</style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <style>
     .logo {
     font-family: 'Orbitron', sans-serif;
     color: #007bff;
     }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script>
     $(document).ready(function(){
      $("#btn-login").click(function() {
        const formData = new URLSearchParams();
        formData.append('username', $("#email").val());
        formData.append('password', $("#password").val());
        
        fetch('/signup_api', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formData.toString()
        })
          .then(res => res.json())
          .then(data => {
          if (!data.ok) {
            document.getElementById("error-message").style.display = "block";
            document.getElementById("error-message").innerHTML = "Failed to Create Account, Error: " + data.error;
          } else {
            document.getElementById("error-message").style.display = "block";
            document.getElementById("error-message").innerHTML = "Account Created, Please Login";
          }
          });
      });	
      const queryparams = new URLSearchParams(window.location.search);
      if (queryparams.get('error')) {
         document.getElementById("error-message").style.display = "block";
         document.getElementById("error-message").innerHTML = queryparams.get('error');
      }		  
     });
    </script>
   </head>
   <body>
    <div class="container-fluid">
     <div class="row no-gutter">
      <div class="col-md-6 d-none d-md-flex bg-image"></div>
      <div class="col-md-6 bg-light">
         <div class="login d-flex align-items-center py-5">
          <div class="container">
           <div class="row">
            <div class="col-lg-10 col-xl-7 mx-auto">
               <h3 class="logo text-center mb-3">${authConfig.siteName}</h3>
               <div id="error-message" class="alert alert-danger"></div>
               <form onsubmit="return false;" method="post">
                <p id="error" style="color:red;"></p>
                <div class="form-group mb-3">
                 <input id="email" type="text" placeholder="Username" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" required>
                </div>
                <div class="form-group mb-3">
                 <input id="password" type="password" placeholder="Password" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" required>
                </div>
                <button id="btn-login" type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">SIGNUP</button>
                <a href="/login" class="btn btn-outline-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">LOGIN</a>
               </form>
               <hr class="solid">
               ${authConfig.enable_social_login ? `<div id="allsociallogins" style="display:block;">
              <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=`+authConfig.google_client_id_for_login+`&redirect_uri=`+authConfig.redirect_domain+`/google_callback&response_type=code&scope=email%20profile&response_mode=query" id="btn-google" class="btn btn-block btn-social btn-google"><span class="fa fa-google"></span> Sign in with Google</a>
               </div>` : ''}
            </div>
           </div>
          </div>
         </div>
         <center>
          <p>
           &copy; <script>document.write(new Date().getFullYear())</script> ${uiConfig.company_name}
          </p>
         </center>
      </div>
     </div>
    </div>
   </body>
</html>`

const not_found = `<!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
  <title>Error 404 (Not Found)!!1</title>
  <style>
  *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
  <p><b>404.</b> <ins>That’s an error.</ins>
  <p id="status"></p>

  <script>
  document.getElementById("status").innerHTML =
"The requested URL <code>" + window.location.pathname + "</code> was not found on this server.  <ins>That’s all we know.</ins>";
  </script>`

const asn_blocked = `<html>
  <head>
  <title>Access Denied</title>
  <link href='https://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
  <style>
  body{
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    color:#b0bec5;
    display:table;
    font-weight:100;
    font-family:Lato
  }
  .container{
    text-align:center;
    display:table-cell;
    vertical-align:middle
  }
  .content{
    text-align:center;
    display:inline-block
  }
  .message{
    font-size:80px;
    margin-bottom:40px
  }
  a{
    text-decoration:none;
    color:#3498db
  }

  </style>
  </head>
  <body>
  <div class="container">
  <div class="content">
  <div class="message">Access Denied</div>
  </div>
  </div>
  </body>
  </html>`

const directlink = `
  <html>
  <head>
  <title>Direct Link - Access Denied</title>
  <link href='https://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
  <style>
  body{
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    color:#b0bec5;
    display:table;
    font-weight:100;
    font-family:Lato
  }
  .container{
    text-align:center;
    display:table-cell;
    vertical-align:middle
  }
  .content{
    text-align:center;
    display:inline-block
  }
  .message{
    font-size:80px;
    margin-bottom:40px
  }
  a{
    text-decoration:none;
    color:#3498db
  }

  </style>
  </head>
  <body>
  <div class="container">
  <div class="content">
  <div class="message">Access Denied</div>
  <center><a href=""><button id="goto">Click Here to Proceed!</button></a></center>
  </div>
  </div>
  </body>
  </html>
  `

const SearchFunction = {
  formatSearchKeyword: function(keyword) {
    let nothing = "";
    let space = " ";
    if (!keyword) return nothing;
    return keyword.replace(/(!=)|['"=<>/\\:]/g, nothing)
      .replace(/[,，|(){}]/g, space)
      .trim()
  }

};

const DriveFixedTerms = new(class {
  default_file_fields = 'parents,id,name,mimeType,modifiedTime,createdTime,fileExtension,size';
  gd_root_type = {
    user_drive: 0,
    share_drive: 1
  };
  folder_mime_type = 'application/vnd.google-apps.folder';
})();

// Token Generation for Service Accounts
const JSONWebToken = {
  header: {
    alg: 'RS256',
    typ: 'JWT'
  },
  importKey: async function(pemKey) {
    var pemDER = this.textUtils.base64ToArrayBuffer(pemKey.split('\n').map(s => s.trim()).filter(l => l.length && !l.startsWith('---')).join(''));
    return crypto.subtle.importKey('pkcs8', pemDER, {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256'
    }, false, ['sign']);
  },
  createSignature: async function(text, key) {
    const textBuffer = this.textUtils.stringToArrayBuffer(text);
    return crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, textBuffer)
  },
  generateGCPToken: async function(serviceAccount) {
    const iat = parseInt(Date.now() / 1000);
    var payload = {
      "iss": serviceAccount.client_email,
      "scope": "https://www.googleapis.com/auth/drive",
      "aud": "https://oauth2.googleapis.com/token",
      "exp": iat + 3600,
      "iat": iat
    };
    const encPayload = btoa(JSON.stringify(payload));
    const encHeader = btoa(JSON.stringify(this.header));
    var key = await this.importKey(serviceAccount.private_key);
    var signed = await this.createSignature(encHeader + "." + encPayload, key);
    return encHeader + "." + encPayload + "." + this.textUtils.arrayBufferToBase64(signed).replace(/\//g, '_').replace(/\+/g, '-');
  },
  textUtils: {
    base64ToArrayBuffer: function(base64) {
      var binary_string = atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
    },
    stringToArrayBuffer: function(str) {
      var len = str.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = str.charCodeAt(i);
      }
      return bytes.buffer;
    },
    arrayBufferToBase64: function(buffer) {
      let binary = '';
      let bytes = new Uint8Array(buffer);
      let len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary);
    }
  }
};

// web crypto functions
async function encryptString(string, iv) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(crypto_base_key),
    "AES-CBC",
    false,
    ["encrypt"]
  );
  const encodedId = new TextEncoder().encode(string);
  const encryptedData = await crypto.subtle.encrypt({
      name: "AES-CBC",
      iv: encrypt_iv
    },
    key,
    encodedId
  );
  const encryptedString = btoa(Array.from(new Uint8Array(encryptedData), (byte) => String.fromCharCode(byte)).join(""));
  return encryptedString;
}

async function decryptString(encryptedString) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(crypto_base_key),
    "AES-CBC",
    false,
    ["decrypt"]
  );
  const encryptedBytes = Uint8Array.from(atob(encryptedString), (char) => char.charCodeAt(0));
  const decryptedData = await crypto.subtle.decrypt({
      name: "AES-CBC",
      iv: encrypt_iv
    },
    key,
    encryptedBytes
  );
  const decryptedString = new TextDecoder().decode(decryptedData);
  return decryptedString;
}

// Web Crypto Integrity Generate API
async function genIntegrity(data, key = hmac_base_key) {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hmacKey = await crypto.subtle.importKey(
      'raw',
      encoder.encode(key), {
          name: 'HMAC',
          hash: 'SHA-256'
      },
      false,
      ['sign']
  );
  const hmacBuffer = await crypto.subtle.sign('HMAC', hmacKey, dataBuffer);

  // Convert the HMAC buffer to hexadecimal string
  const hmacArray = Array.from(new Uint8Array(hmacBuffer));
  const hmacHex = hmacArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

  return hmacHex;
}

async function checkintegrity(text1, text2) {
  return text1 === text2;
}

function login() {
  return new Response(login_html, {
    status: 401,
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    }
  });
}


// start handlerequest
async function handleRequest(request, event) {
  const region = request.headers.get('cf-ipcountry');
  const asn_servers = request.cf.asn;
  const referer = request.headers.get("Referer");
  var user_ip = request.headers.get("CF-Connecting-IP");
  let url = new URL(request.url);
  let path = url.pathname;
  let hostname = url.hostname;
  if (path == '/app.js') {
    const js = await fetch('https://gitlab.com/GoogleDriveIndex/Google-Drive-Index/-/raw/dev/src/app.js', {
      method: 'GET',
    })
    const data = await js.text()
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/javascript; charset=utf-8',
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
      }
    });
  }
  if (path == '/logout') {
    let response = new Response("", {});
    response.headers.set('Set-Cookie', `session=; HttpOnly; Secure; SameSite=Lax;`);
    response.headers.set("Refresh", "1; url=/?error=Logged Out");
    return response;
  }
  if (path == '/findpath') {
    const params = url.searchParams;
    const id = params.get('id');
    const view = params.get('view') || 'false';
    return Response.redirect(url.protocol + hostname + '/0:findpath?id=' + id + '&view=' + view, 307);
  }
  if (authConfig.enable_login) {
    const login_database = authConfig.login_database.toLowerCase();
    //console.log("Login Enabled")
    if (path == '/download.aspx' && !authConfig.disable_anonymous_download) {
      console.log("Anonymous Download")
    } else if (path == '/google_callback') {
      // Extract the authorization code from the query parameters
      const code = url.searchParams.get('code')
      if (!code) {
        return new Response('Missing authorization code.', {
          status: 400
        });
      }

      // Use the authorization code to obtain access token and ID token		
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          code,
          client_id: authConfig.google_client_id_for_login,
          client_secret: authConfig.google_client_secret_for_login,
          redirect_uri: authConfig.redirect_domain + '/google_callback',
          grant_type: 'authorization_code',
        }),
      });

      const data = await response.json();
      console.log(JSON.stringify(data));
      if (response.ok) {
        const idToken = data.id_token;
        const decodedIdToken = await decodeJwtToken(idToken);
        const username = decodedIdToken.email;
        let kv_key
        let user_found = false;
        // Check if user email exist in the list
        if (login_database == 'kv') {
          kv_key = await ENV.get(username);
          if (kv_key == null) {
            user_found = false;
          } else {
            user_found = true;
          }
        } else if (login_database == 'mongodb') {
          // to be implemented later
        } else { // local database
          for (i = 0; i < authConfig.users_list.length; i++) {
            if (authConfig.users_list[i].username == username) {
              user_found = true;
              console.log("User Found")
              break;
            }
          }
        }
        if (!user_found) {
          if (authConfig.enable_signup && login_database == 'kv') {
            await ENV.put(username, Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
            kv_key = await ENV.get(username);
            if (kv_key == null) {
              user_found = false;
            } else {
              user_found = true;
            }
          } else {
            let response = new Response('Invalid User! Google Login', {});
            response.headers.set('Set-Cookie', `session=; HttpOnly; Secure; SameSite=Lax;`);
            response.headers.set("Refresh", "1; url=/?error=Invalid User");
            return response;
          }
        }
        const current_time = Date.now(); // this results in a timestamp of the number of milliseconds since epoch.
        const session_time = current_time + 86400000 * authConfig.login_days;
        const encryptedSession = `${await encryptString(username)}|${await encryptString(kv_key)}|${await encryptString(session_time.toString())}`;
        if (authConfig.single_session) {
          await ENV.put(username + '_session', encryptedSession);
        }
        if (authConfig.ip_changed_action && user_ip) {
          await ENV.put(username + '_ip', user_ip);
        }
        // reload page with cookie
        let response = new Response("", {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Set-Cookie': `session=${encryptedSession}; path=/; HttpOnly; Secure; SameSite=Lax`,
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
            'Refresh': '0; url=/',
          }
        });
        return response;
      } else {
        let response = new Response('Invalid Token!', {});
        response.headers.set('Set-Cookie', `session=; HttpOnly; Secure; SameSite=Lax;`);
        response.headers.set("Refresh", "1; url=/?error=Invalid Token");
        return response;
      }
    } else if (authConfig.enable_login && request.method === 'POST' && path === '/login') {
      console.log("POST Request for Login")
      const formdata = await request.formData();
      const username = formdata.get('username');
      const password = formdata.get('password');
      if (login_database == 'kv') {
        const kv_key = await ENV.get(username);
        if (kv_key == null) {
          var user_found = false;
        } else {
          if (kv_key == password) {
            var user_found = true;
          } else {
            var user_found = false;
          }
        }
      } else if (login_database == 'mongodb') {
        // to be implemented later
      } else { // local database
        for (i = 0; i < authConfig.users_list.length; i++) {
          if (authConfig.users_list[i].username == username && authConfig.users_list[i].password == password) {
            var user_found = true;
            break;
          }
        }
      }

      if (!user_found) {
        const jsonResponse = {
          ok: false,
        }
        let response = new Response(JSON.stringify(jsonResponse), {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
          }
        });
        return response;
      }
      if (user_found) {
        const current_time = Date.now(); // this results in a timestamp of the number of milliseconds since epoch.
        const session_time = current_time + 86400000 * authConfig.login_days;
        const encryptedSession = `${await encryptString(username)}|${await encryptString(password)}|${await encryptString(session_time.toString())}`;
        if (authConfig.single_session) {
          await ENV.put(username + '_session', encryptedSession);
        }
        if (authConfig.ip_changed_action && user_ip) {
          await ENV.put(username + '_ip', user_ip);
        }
        const jsonResponse = {
          ok: true,
        }
        let response = new Response(JSON.stringify(jsonResponse), {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Set-Cookie': `session=${encryptedSession}; path=/; HttpOnly; Secure; SameSite=Lax`,
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
          }
        });
        return response;
      } else {
        const jsonResponse = {
          ok: false,
        }
        let response = new Response(JSON.stringify(jsonResponse), {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
          }
        });
        return response;
      }
    } else if (path == '/signup' && authConfig.enable_signup) {
      return new Response(signup_html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Access-Control-Allow-Origin': '*', // Required for CORS support to work
          'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
        }
      });
    } else if (authConfig.enable_signup && request.method === 'POST' && path === '/signup_api') {
      if (login_database == 'kv') {
        const formdata = await request.formData();
        const username = formdata.get('username');
        const password = formdata.get('password');
        if (username == null || password == null) {
          const jsonResponse = {
            ok: true,
            error: "Username or Password is null"
          }
          let response = new Response(JSON.stringify(jsonResponse), {
            status: 200,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              'Set-Cookie': `session=; path=/; HttpOnly; Secure; SameSite=Lax`,
              'Access-Control-Allow-Origin': '*', // Required for CORS support to work
              'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
            }
          });
          return response;
        } else if (username.length > 8 && password.length > 8) {
          const checkKey = await ENV.get(username);
          let jsonResponse;
          if (checkKey != null) {
            jsonResponse = {
              ok: false,
              error: "User Already Exists"
            }
          } else {
            await ENV.put(username, password);
            jsonResponse = {
              ok: true,
              error: "User Created"
            }
          }
          let response = new Response(JSON.stringify(jsonResponse), {
            status: 200,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              'Set-Cookie': `session=; path=/; HttpOnly; Secure; SameSite=Lax`,
              'Access-Control-Allow-Origin': '*', // Required for CORS support to work
              'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
            }
          });
          return response;
        } else {
          const jsonResponse = {
            ok: false,
            error: "Username or Password length is less than 8 characters"
          }
          let response = new Response(JSON.stringify(jsonResponse), {
            status: 200,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              'Set-Cookie': `session=; path=/; HttpOnly; Secure; SameSite=Lax`,
              'Access-Control-Allow-Origin': '*', // Required for CORS support to work
              'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
            }
          });
          return response;
        }
      } else if (login_database == 'mongodb') {
        // to be implemented later
      } else {
        return new Response("Signup is not supported with local database", {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
          }
        });
      }
    } else if (request.method === 'GET') {
      //console.log("GET Request")
      const cookie = request.headers.get('cookie');
      if (cookie && cookie.includes('session=')) {
        const session = cookie.split('session=').pop().split(';').shift().trim();
        if (session == 'null' || session == '' || session == null) {
          return login()
        }
        const username = await decryptString(session.split('|')[0]);
        let kv_session
        if (authConfig.single_session) {
          kv_session = await ENV.get(username + '_session');
          if (kv_session != session) {
            let response = new Response('User Logged in Someplace Else!', {
              headers: {
                'Set-Cookie': `session=; HttpOnly; Secure; SameSite=Lax;`,
              }
            });
            response.headers.set("Refresh", "1; url=/?error=User Logged in Someplace Else!");
            return response;
          }
        }
        if (authConfig.ip_changed_action && user_ip) {
          const kv_ip = await ENV.get(username + '_ip');
          if (kv_ip != user_ip) {
            let response = new Response('IP Changed! Login Required', {
              headers: {
                'Set-Cookie': `session=; HttpOnly; Secure; SameSite=Lax;`,
              }
            });
            response.headers.set("Refresh", "1; url=/?error=IP Changed! Login Required");
            return response;
          }
        }
        const session_time = await decryptString(session.split('|')[2]);
        console.log("User: " + username + " | Session Time: " + session_time)
        const current_time = Date.now(); // this results in a timestamp of the number of milliseconds since epoch.
        if (Number(session_time) < current_time) {
          let response = new Response('Session Expired!', {
            headers: {
              'Set-Cookie': `session=; HttpOnly; Secure; SameSite=Lax;`,
            }
          });
          response.headers.set("Refresh", "1; url=/?error=Session Expired!");
          return response;
        }
        if (login_database == 'kv') {
          const kv_key = await ENV.get(username);
          if (kv_key == null) {
            var user_found = false;
          } else {
            if (kv_key) {
              var user_found = true;
            } else {
              var user_found = false;
            }
          }
        } else if (login_database == 'mongodb') {
          // to be implemented later
        } else { // local database
          for (i = 0; i < authConfig.users_list.length; i++) {
            if (authConfig.users_list[i].username == username) {
              var user_found = true;
              break;
            }
          }
        }
        if (user_found) {
          console.log("User Found")
        } else {
          let response = new Response('Invalid User! Something Wrong', {});
          response.headers.set('Set-Cookie', `session=; HttpOnly; Secure; SameSite=Lax;`);
          response.headers.set("Refresh", "1; url=/?error=Invalid User");
          return response;
        }
      } else {
        return login()
      }
    }
  }

  if (gds.length === 0) {
    for (let i = 0; i < authConfig.roots.length; i++) {
      const gd = new googleDrive(authConfig, i);
      await gd.init();
      gds.push(gd)
    }
    let tasks = [];
    gds.forEach(gd => {
      tasks.push(gd.initRootType());
    });
    for (let task of tasks) {
      await task;
    }
  }

  let gd;

  function redirectToIndexPage() {
    return new Response('', {
      status: 307,
      headers: {
        'Location': `${url.origin}/0:/`
      }
    });
  }

  if (region && blocked_region.includes(region.toUpperCase())) {
    return new Response(asn_blocked, {
      status: 403,
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    })
  } else if (asn_servers && blocked_asn.includes(asn_servers)) {
    return new Response(asn_blocked, {
      headers: {
        'content-type': 'text/html;charset=UTF-8'
      },
      status: 401
    });
  } else if (path == '/') {
    return new Response(homepage, {
      status: 200,
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    })
  } else if (path == '/fallback') {
    return new Response(html(0, {
      is_search_page: false,
      root_type: 1
    }), {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      }
    });
  } else if (path == '/download.aspx') {
    console.log("Download.aspx started");
    const file = await decryptString(url.searchParams.get('file'));
    console.log(file)
    const expiry = await decryptString(url.searchParams.get('expiry'));
    let integrity_result = false;
    if (authConfig['enable_ip_lock'] && user_ip) {
      const integrity = await genIntegrity(`${file}|${expiry}|${user_ip}`);
      const mac = url.searchParams.get('mac');
      integrity_result = await checkintegrity(mac, integrity);
    } else {
      const integrity = await genIntegrity(`${file}|${expiry}`);
      const mac = url.searchParams.get('mac');
      integrity_result = await checkintegrity(mac, integrity);
    }
    if (integrity_result) {
      let range = request.headers.get('Range');
      const inline = 'true' === url.searchParams.get('inline');
      console.log(file, range)
      return download(file, range, inline);
    } else {
      return new Response('Invalid Request!', {
        status: 401,
        headers: {
          "content-type": "text/html;charset=UTF-8",
        },
      })
    }
  }

  if (authConfig['direct_link_protection']) {
    if (referer == null) {
      return new Response(directlink, {
        headers: {
          'content-type': 'text/html;charset=UTF-8'
        },
        status: 401
      });
    } else if (referer.includes(hostname)) {
      console.log("Refer Detected");
    } else {
      return new Response(directlink, {
        headers: {
          'content-type': 'text/html;charset=UTF-8'
        },
        status: 401
      });
    }
  }


  const command_reg = /^\/(?<num>\d+):(?<command>[a-zA-Z0-9]+)(\/.*)?$/g;
  const match = command_reg.exec(path);
  if (match) {
    const num = match.groups.num;
    const order = Number(num);
    if (order >= 0 && order < gds.length) {
      gd = gds[order];
    } else {
      return redirectToIndexPage()
    }
    //for (const r = gd.basicAuthResponse(request); r;) return r;
    const command = match.groups.command;
    if (command === 'search') {
      if (request.method === 'POST') {
        return handleSearch(request, gd, user_ip);
      } else {
        const params = url.searchParams;
        return new Response(html(gd.order, {
          q: params.get("q").replace(/'/g, "").replace(/"/g, "") || '',
          is_search_page: true,
          root_type: gd.root_type
        }), {
          status: 200,
          headers: {
            'Content-Type': 'text/html; charset=utf-8'
          }
        });
      }
    } else if (command === 'id2path' && request.method === 'POST') {
      return handleId2Path(request, gd)
    } else if (command === 'fallback' && request.method === 'POST') {
      const formdata = await request.json();
      const id = await decryptString(formdata.id);
      const type = formdata.type;
      if (type && type == 'folder') {
        const page_token = formdata.page_token || null;
        const page_index = formdata.page_index || 0;
        const details = await gd._list_gdrive_files(id, page_token, page_index);
        for (const file of details.data.files) {
          if (file.mimeType != 'application/vnd.google-apps.folder') {
            file.link = await generateLink(file.id, user_ip);
          }
          file.driveId = await encryptString(file.driveId);
          file.id = await encryptString(file.id);
        }
        const encryptedDetails = details;
        return new Response(JSON.stringify(encryptedDetails), {});
      }
      const details = await gd.findItemById(id)
      details.link = await generateLink(details.id, user_ip);
      details.id = formdata.id;
      details.parents[0] = null;
      return new Response(JSON.stringify(details), {});
    } else if (command === 'findpath' && request.method === 'GET') {
      return findId2Path(gd, url)
    }
  }



  const common_reg = /^\/\d+:\/.*$/g;
  try {
    if (!path.match(common_reg)) {
      return redirectToIndexPage();
    }
    let split = path.split("/");
    let order = Number(split[1].slice(0, -1));
    if (order >= 0 && order < gds.length) {
      gd = gds[order];
    } else {
      return redirectToIndexPage()
    }
  } catch (e) {
    return redirectToIndexPage()
  }

  //path = path.replace(gd.url_path_prefix, '') || '/';
  if (request.method == 'POST') {
    return apiRequest(request, gd, user_ip);
  }

  let action = url.searchParams.get('a');
  if (path.slice(-1) == '/' || action != null) {
    return new Response(html(gd.order, {
      root_type: gd.root_type
    }), {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      }
    });
  } else {
    /*if (path.split('/').pop().toLowerCase() == ".password") {
      return  new Response("", {
        status: 404
      });
    }*/
    console.log(path)
    const file = await gd.get_single_file(path.slice(3));
    console.log(file)
    let range = request.headers.get('Range');
    const inline = 'true' === url.searchParams.get('inline');
    if (gd.root.protect_file_link && enable_login) return login();
    return download(file.id, range, inline);

  }



}
// end handlerequest

function enQuery(data) {
  const ret = [];
  for (let d in data) {
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  }
  return ret.join('&');
}

async function getAccessToken() {
  if (authConfig.expires == undefined || authConfig.expires < Date.now()) {
    const obj = await fetchAccessToken();
    if (obj.access_token != undefined) {
      authConfig.accessToken = obj.access_token;
      authConfig.expires = Date.now() + 3500 * 1000;
    }
  }
  return authConfig.accessToken;
}

async function fetchAccessToken() {
  console.log("fetchAccessToken");
  const url = "https://www.googleapis.com/oauth2/v4/token";
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  var post_data;
  if (authConfig.service_account && typeof authConfig.service_account_json != "undefined") {
    const jwttoken = await JSONWebToken.generateGCPToken(authConfig.service_account_json);
    post_data = {
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwttoken,
    };
  } else {
    post_data = {
      client_id: authConfig.client_id,
      client_secret: authConfig.client_secret,
      refresh_token: authConfig.refresh_token,
      grant_type: "refresh_token",
    };
  }

  let requestOption = {
    'method': 'POST',
    'headers': headers,
    'body': enQuery(post_data)
  };

  let response;
  for (let i = 0; i < 3; i++) {
    response = await fetch(url, requestOption);
    if (response.ok) {
      break;
    }
    await sleep(800 * (i + 1));
  }
  return await response.json();
}

async function sleep(ms) {
  return new Promise(function(resolve, reject) {
    let i = 0;
    setTimeout(function() {
      console.log('sleep' + ms);
      i++;
      if (i >= 2) reject(new Error('i>=2'));
      else resolve(i);
    }, ms);
  })
}
async function generateLink(file_id, user_ip, iv) {
  const encrypted_id = await encryptString(file_id, iv);
  const expiry = Date.now() + 1000 * 60 * 60 * 24 * authConfig.file_link_expiry;
  const encrypted_expiry = await encryptString(expiry.toString(), iv);
  let url
  if (authConfig['enable_ip_lock'] && user_ip) {
    const encrypted_ip = await encryptString(user_ip, iv);
    const integrity = await genIntegrity(`${file_id}|${expiry}|${user_ip}`);
    url = `/download.aspx?file=${encodeURIComponent(encrypted_id)}&expiry=${encodeURIComponent(encrypted_expiry)}&ip=${encodeURIComponent(encrypted_ip)}&mac=${encodeURIComponent(integrity)}`;
  } else {
    const integrity = await genIntegrity(`${file_id}|${expiry}`);
    url = `/download.aspx?file=${encodeURIComponent(encrypted_id)}&expiry=${encodeURIComponent(encrypted_expiry)}&mac=${encodeURIComponent(integrity)}`;
  }
  return url;
}

async function apiRequest(request, gd, user_ip) {
  let url = new URL(request.url);
  let path = url.pathname;
  path = path.replace(gd.url_path_prefix, '') || '/';
  console.log("handling apirequest: " + path);
  let option = {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  if (path.slice(-1) == '/') {
    let requestData = await request.json();
    let list_result = await gd.request_list_of_files(
      path,
      requestData.page_token || null,
      Number(requestData.page_index) || 0
    );

    if (authConfig['enable_password_file_verify']) {
      let password = await gd.password(path);
      // console.log("dir password", password);
      if (password && password.replace("\n", "") !== form.get('password')) {
        let html = `Y29kZWlzcHJvdGVjdGVk=0Xfi4icvJnclBCZy92dzNXYwJCI6ISZnF2czVWbiwSMwQDI6ISZk92YisHI6IicvJnclJyeYmFzZTY0aXNleGNsdWRlZA==`;
        return new Response(html, option);
      }
    }

    list_result.data.files = await Promise.all(list_result.data.files.map(async (file) => {
      const {
        driveId,
        id,
        mimeType,
        ...fileWithoutId
      } = file;

      const encryptedId = await encryptString(id);
      const encryptedDriveId = await encryptString(driveId);

      let link = null;
      if (mimeType !== 'application/vnd.google-apps.folder') {
        link = await generateLink(id, user_ip);
      }

      return {
        ...fileWithoutId,
        id: encryptedId,
        driveId: encryptedDriveId,
        mimeType: mimeType,
        link: link,
      };
    }));


    const encryptedFiles = list_result;
	const data = JSON.stringify(encryptedFiles)
    return new Response(data, {
		status: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json;charset=UTF-8'

		}
	});
  } else {
    let file_json = await gd.get_single_file(path);
    const {
      driveId,
      id,
      ...fileWithoutId
    } = file_json;

    const encryptedId = await encryptString(id);
    const encryptedDriveId = await encryptString(driveId);
    const link = await generateLink(id, user_ip);
    const encryptedFile = {
      ...fileWithoutId,
      id: encryptedId,
      driveId: encryptedDriveId,
      link: link,
    };

    const encryptedFiles = encryptedFile;

	const data = JSON.stringify(encryptedFiles)
    return new Response(data, {
		status: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json;charset=UTF-8'

		}
	});
  }
}

// deal with search
async function handleSearch(request, gd, user_ip = '') {
  const option = {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
  const requestData = await request.json();
  const q = requestData.q || '';
  const pageToken = requestData.page_token || null;
  const pageIndex = Number(requestData.page_index) || 0;
  if (q == '') return new Response(JSON.stringify({
    "nextPageToken": null,
    "curPageIndex": 0,
    "data": {
      "files": []
    }
  }), option);
  const searchResult = await gd.searchFilesinDrive(q, pageToken, pageIndex);
  searchResult.data.files = await Promise.all(searchResult.data.files.map(async (file) => {
    const {
      driveId,
      id,
      ...fileWithoutId
    } = file;

    const encryptedId = await encryptString(id);
    const encryptedDriveId = await encryptString(driveId);
    const link = await generateLink(id, user_ip);
    return {
      ...fileWithoutId,
      id: encryptedId,
      driveId: encryptedDriveId,
      link: link,
    };
  }));
  return new Response(JSON.stringify(searchResult), option);
}

async function handleId2Path(request, gd) {
  let url = new URL(request.url);
  const option = {
    status: 200,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": authConfig.cors_domain,
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    }
  };
  try {
    const data = await request.json();
    const id = await decryptString(data.id);
    let [path, prefix] = await gd.findPathById(id);
    let jsonpath = '{"path": "/' + prefix + ':' + path + '"}'
    console.log(jsonpath)
    return new Response(jsonpath || '', option);
  } catch (error) {
    console.log(error)
    return new Response('{"message":"Request Failed or Path Not Found","error":"' + error + '"}', {
      status: 500,
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": authConfig.cors_domain,
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      }
    });
  }
}

async function findId2Path(gd, url) {
	try {
		let [path, prefix] = await gd.findPathById(url.searchParams.get('id'));
		console.log(path, prefix)
		if (!path) {
			return new Response("Invalid URL");
		} else if (url.searchParams.get('view') && url.searchParams.get('view') == 'true') {
			//return new Response("https://" + url.hostname + "/" + prefix + ":" + path + "?a=view" || '');
			return Response.redirect("https://" + url.hostname + "/" + prefix + ":" + path + "?a=view" || '', 302);
		} else {
			//return new Response("https://" + url.hostname + "/" + prefix + ":" + path + "?a=view" || '');
			return Response.redirect("https://" + url.hostname + "/" + prefix + ":" + path || '', 302);
		}
	} catch (error) {
		const encrypted_id = await encryptString(url.searchParams.get('id'), encrypt_iv)
		return Response.redirect("https://" + url.hostname + "/fallback?id=" + encrypted_id || '', 302);
	}
}

/*async function findItemById(gd, id) {
  console.log(id)
  const is_user_drive = this.root_type === DriveFixedTerms.gd_root_type.user_drive;
  let url = `https://www.googleapis.com/drive/v3/files/${id}?fields=${DriveFixedTerms.default_file_fields}${is_user_drive ? '' : '&supportsAllDrives=true'}`;
  let requestOption = await gd.requestOptions();
  let res = await fetch(url, requestOption);
  return await res.json();
}*/

// start of class googleDrive
class googleDrive {
  constructor(authConfig, order) {
    this.order = order;
    this.root = authConfig.roots[order];
    this.root.protect_file_link = this.root.protect_file_link || false;
    this.url_path_prefix = `/${order}:`;
    this.authConfig = authConfig;
    this.paths = [];
    this.files = [];
    this.passwords = [];
    this.paths["/"] = this.root['id'];
  }
  async init() {
    await getAccessToken();
    if (authConfig.user_drive_real_root_id) return;
    const root_obj = await (gds[0] || this).findItemById('root');
    if (root_obj && root_obj.id) {
      authConfig.user_drive_real_root_id = root_obj.id
    }
  }

  async initRootType() {
    const root_id = this.root['id'];
    const types = DriveFixedTerms.gd_root_type;
    if (root_id === 'root' || root_id === authConfig.user_drive_real_root_id) {
      this.root_type = types.user_drive;
    } else {
      this.root_type = types.share_drive;
    }
  }


  async get_single_file(path) {
    if (typeof this.files[path] == 'undefined') {
      this.files[path] = await this.get_single_file_api(path);
    }
    return this.files[path];
  }

  async get_single_file_api(path) {
    let arr = path.split('/');
    let name = arr.pop();
    name = decodeURIComponent(name).replace(/\'/g, "\\'");
    let dir = arr.join('/') + '/';
    console.log("try " + name, dir);
    let parent = await this.findPathId(dir);
    console.log("try " + parent)
    let url = 'https://www.googleapis.com/drive/v3/files';
    let params = {
      'includeItemsFromAllDrives': true,
      'supportsAllDrives': true
    };
    params.q = `'${parent}' in parents and name = '${name}' and trashed = false and mimeType != 'application/vnd.google-apps.shortcut'`;
    params.fields = "files(id, name, mimeType, size ,createdTime, modifiedTime, iconLink, thumbnailLink, driveId, fileExtension)";
    url += '?' + enQuery(params);
    let requestOption = await this.requestOptions();
    let response;
    for (let i = 0; i < 3; i++) {
      response = await fetch(url, requestOption);
      if (response.ok) {
        break;
      }
      await sleep(800 * (i + 1));
    }
    let obj = await response.json();
    // console.log(obj);
    return obj.files[0];
  }

  async request_list_of_files(path, page_token = null, page_index = 0) {
    if (this.path_children_cache == undefined) {
      // { <path> :[ {nextPageToken:'',data:{}}, {nextPageToken:'',data:{}} ...], ...}
      this.path_children_cache = {};
    }

    if (this.path_children_cache[path] &&
      this.path_children_cache[path][page_index] &&
      this.path_children_cache[path][page_index].data
    ) {
      let child_obj = this.path_children_cache[path][page_index];
      return {
        nextPageToken: child_obj.nextPageToken || null,
        curPageIndex: page_index,
        data: child_obj.data
      };
    }

    let id = await this.findPathId(path);
    let result = await this._list_gdrive_files(id, page_token, page_index);
    let data = result.data;
    if (result.nextPageToken && data.files) {
      if (!Array.isArray(this.path_children_cache[path])) {
        this.path_children_cache[path] = []
      }
      this.path_children_cache[path][Number(result.curPageIndex)] = {
        nextPageToken: result.nextPageToken,
        data: data
      };
    }

    return result
  }

  // listing files usign google drive api
  async _list_gdrive_files(parent, page_token = null, page_index = 0) {

    if (parent == undefined) {
      return null;
    }
    let obj;
    let params = {
      'includeItemsFromAllDrives': true,
      'supportsAllDrives': true
    };
    params.q = `'${parent}' in parents and trashed = false AND name !='.password' and mimeType != 'application/vnd.google-apps.shortcut' and mimeType != 'application/vnd.google-apps.document' and mimeType != 'application/vnd.google-apps.spreadsheet' and mimeType != 'application/vnd.google-apps.form' and mimeType != 'application/vnd.google-apps.site'`;
    params.orderBy = 'folder, name, modifiedTime desc';
    params.fields = "nextPageToken, files(id, name, mimeType, size, modifiedTime, driveId, kind, fileExtension)";
    params.pageSize = this.authConfig.files_list_page_size;

    if (page_token) {
      params.pageToken = page_token;
    }
    let url = 'https://www.googleapis.com/drive/v3/files';
    url += '?' + enQuery(params);
    let requestOption = await this.requestOptions();
    let response;
    for (let i = 0; i < 3; i++) {
      response = await fetch(url, requestOption);
      if (response.ok) {
        break;
      }
      await sleep(800 * (i + 1));
    }
    obj = await response.json();

    return {
      nextPageToken: obj.nextPageToken || null,
      curPageIndex: page_index,
      data: obj
    };
  }

  async password(path) {
    if (this.passwords[path] !== undefined) {
      return this.passwords[path];
    }

    let file = await this.get_single_file(path + '.password');
    if (file == undefined) {
      this.passwords[path] = null;
    } else {
      let url = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
      let requestOption = await this.requestOptions();
      let response = await this.fetch200(url, requestOption);
      this.passwords[path] = await response.text();
    }

    return this.passwords[path];
  }

  async searchFilesinDrive(origin_keyword, page_token = null, page_index = 0) {
    const types = DriveFixedTerms.gd_root_type;
    const is_user_drive = this.root_type === types.user_drive;
    const is_share_drive = this.root_type === types.share_drive;
    const empty_result = {
      nextPageToken: null,
      curPageIndex: page_index,
      data: null
    };

    if (!is_user_drive && !is_share_drive) {
      return empty_result;
    }
    let keyword = SearchFunction.formatSearchKeyword(origin_keyword);
    if (!keyword) {
      return empty_result;
    }
    let words = keyword.split(/\s+/);
    let name_search_str = `name contains '${words.join("' AND name contains '")}'`;
    let params = {};
    if (is_user_drive) {
      if (authConfig.search_all_drives) {
        params.corpora = 'allDrives';
        params.includeItemsFromAllDrives = true;
        params.supportsAllDrives = true;
      } else {
        params.corpora = 'user';
      }
    }
    if (is_share_drive) {
      if (authConfig.search_all_drives) {
        params.corpora = 'allDrives';
      } else {
        params.corpora = 'drive';
        params.driveId = this.root.id;
      }
      params.includeItemsFromAllDrives = true;
      params.supportsAllDrives = true;
    }
    if (page_token) {
      params.pageToken = page_token;
    }
    params.q = `trashed = false AND mimeType != 'application/vnd.google-apps.shortcut' and mimeType != 'application/vnd.google-apps.document' and mimeType != 'application/vnd.google-apps.spreadsheet' and mimeType != 'application/vnd.google-apps.form' and mimeType != 'application/vnd.google-apps.site' AND name !='.password' AND (${name_search_str})`;
    params.fields = "nextPageToken, files(id, driveId, name, mimeType, size , modifiedTime)";
    params.pageSize = this.authConfig.search_result_list_page_size;
    params.orderBy = 'folder, name, modifiedTime desc';

    let url = 'https://www.googleapis.com/drive/v3/files';
    url += '?' + enQuery(params);
    let requestOption = await this.requestOptions();
    let response;
    for (let i = 0; i < 3; i++) {
      response = await fetch(url, requestOption);
      if (response.ok) {
        break;
      }
      await sleep(800 * (i + 1));
    }
    let res_obj = await response.json();

    return {
      nextPageToken: res_obj.nextPageToken || null,
      curPageIndex: page_index,
      data: res_obj
    };
  }

  async findParentFilesRecursion(child_id, drive_index_no, contain_myself = true) {
    const gd = this;
    const gd_root_id = gd.root.id;
    const user_drive_real_root_id = authConfig.user_drive_real_root_id;
    const is_user_drive = gd.root_type === DriveFixedTerms.gd_root_type.user_drive;
    const target_top_id = is_user_drive ? user_drive_real_root_id : gd_root_id;
    const fields = DriveFixedTerms.default_file_fields;
    const parent_files = [];
    let meet_top = false;
    async function addItsFirstParent(file_obj) {
      if (!file_obj) return;
      if (!file_obj.parents) return null;
      if (file_obj.parents.length < 1) return;
      let p_ids = file_obj.parents;
      if (p_ids && p_ids.length > 0) {
        const first_p_id = p_ids[0];
        console.log(first_p_id)
        if (drive_list.includes(first_p_id)) {
          meet_top = true;
          drive_index_no = drive_list.indexOf(first_p_id);
          return drive_index_no;
        }
        const p_file_obj = await gd.findItemById(first_p_id);
        if (p_file_obj && p_file_obj.id) {
          parent_files.push(p_file_obj);
          await addItsFirstParent(p_file_obj);
        }
      }
      return drive_index_no;
    }

    const child_obj = await gd.findItemById(child_id);
    if (contain_myself) {
      parent_files.push(child_obj);
    }
    const drive_id = await addItsFirstParent(child_obj);
    console.log("parents -- " + JSON.stringify(parent_files))
    return meet_top ? [parent_files, drive_index_no] : null;
  }

  async findPathById(child_id) {
    let p_files
    let drive_index_no = 0;
    try {
      [p_files, drive_index_no] = await this.findParentFilesRecursion(child_id);
    } catch (error) {
      return null;
    }

    if (!p_files || p_files.length < 1) return '';

    let cache = [];
    // Cache the path and id of each level found
    p_files.forEach((value, idx) => {
      const is_folder = idx === 0 ? (p_files[idx].mimeType === DriveFixedTerms.folder_mime_type) : true;
      let path = '/' + p_files.slice(idx).map(it => encodeURIComponent(it.name)).reverse().join('/');
      if (is_folder) path += '/';
      cache.push({
        id: p_files[idx].id,
        path: path
      })
    });
    return [cache[0].path, drive_index_no];
  }

  async findItemById(id) {
    const is_user_drive = this.root_type === DriveFixedTerms.gd_root_type.user_drive;
    let url = `https://www.googleapis.com/drive/v3/files/${id}?fields=${DriveFixedTerms.default_file_fields}${is_user_drive ? '' : '&supportsAllDrives=true'}`;
    let requestOption = await this.requestOptions();
    let res = await fetch(url, requestOption);
    return await res.json()
  }

  async findPathId(path) {
    let c_path = '/';
    let c_id = this.paths[c_path];

    let arr = path.trim('/').split('/');
    for (let name of arr) {
      c_path += name + '/';

      if (typeof this.paths[c_path] == 'undefined') {
        let id = await this._findDirId(c_id, name);
        this.paths[c_path] = id;
      }

      c_id = this.paths[c_path];
      if (c_id == undefined || c_id == null) {
        break;
      }
    }
    console.log('findPathId: ', path, c_id)
    return this.paths[path];
  }

  async _findDirId(parent, name) {
    name = decodeURIComponent(name).replace(/\'/g, "\\'");
    if (parent == undefined) {
      return null;
    }

    let url = 'https://www.googleapis.com/drive/v3/files';
    let params = {
      'includeItemsFromAllDrives': true,
      'supportsAllDrives': true
    };
    params.q = `'${parent}' in parents and mimeType = 'application/vnd.google-apps.folder' and name = '${name}'  and trashed = false`;
    params.fields = "nextPageToken, files(id, name, mimeType)";
    url += '?' + enQuery(params);
    let requestOption = await this.requestOptions();
    let response;
    for (let i = 0; i < 3; i++) {
      response = await fetch(url, requestOption);
      if (response.ok) {
        break;
      }
      await sleep(800 * (i + 1));
    }
    let obj = await response.json();
    if (obj.files[0] == undefined) {
      return null;
    }
    return obj.files[0].id;
  }

  /*async getAccessToken() {
    console.log("accessToken");
    if (this.authConfig.expires == undefined || this.authConfig.expires < Date.now()) {
      const obj = await fetchAccessToken();
      if (obj.access_token != undefined) {
        this.authConfig.accessToken = obj.access_token;
        this.authConfig.expires = Date.now() + 3500 * 1000;
      }
    }
    return this.authConfig.accessToken;
  }*/

  /*async fetchAccessToken() {
    console.log("fetchAccessToken");
    const url = "https://www.googleapis.com/oauth2/v4/token";
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    var post_data;
    if (this.authConfig.service_account && typeof this.authConfig.service_account_json != "undefined") {
      const jwttoken = await JSONWebToken.generateGCPToken(this.authConfig.service_account_json);
      post_data = {
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwttoken,
      };
    } else {
      post_data = {
        client_id: this.authConfig.client_id,
        client_secret: this.authConfig.client_secret,
        refresh_token: this.authConfig.refresh_token,
        grant_type: "refresh_token",
      };
    }

    let requestOption = {
      'method': 'POST',
      'headers': headers,
      'body': enQuery(post_data)
    };

    let response;
    for (let i = 0; i < 3; i++) {
      response = await fetch(url, requestOption);
      if (response.ok) {
        break;
      }
      await sleep(800 * (i + 1));
    }
    return await response.json();
  }*/

  async fetch200(url, requestOption) {
    let response;
    for (let i = 0; i < 3; i++) {
      response = await fetch(url, requestOption);
      if (response.ok) {
        break;
      }
      await sleep(800 * (i + 1));
    }
    return response;
  }

  async requestOptions(headers = {}, method = 'GET') {
    const Token = await getAccessToken();
    headers['authorization'] = 'Bearer ' + Token;
    return {
      'method': method,
      'headers': headers
    };
  }


  /*sleep(ms) {
    return new Promise(function(resolve, reject) {
      let i = 0;
      setTimeout(function() {
        console.log('sleep' + ms);
        i++;
        if (i >= 2) reject(new Error('i>=2'));
        else resolve(i);
      }, ms);
    })
  }*/
}
// end of class googleDrive
const drive = new googleDrive(authConfig, 0);
async function download(id, range = '', inline) {
  let url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media`;
  const requestOption = await drive.requestOptions();
  requestOption.headers['Range'] = range;
  let file = await drive.findItemById(id);
  if (!file.name) {
    return new Response(`{"error":"Unable to Find this File, Try Again."}`, {
      status: 500,
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": authConfig.cors_domain,
        "Cache-Control": "max-age=3600",
      }
    });
  }
  let res;
  for (let i = 0; i < 3; i++) {
    res = await fetch(url, requestOption);
    if (res.ok) {
      break;
    }
    sleep(800 * (i + 1));
    console.log(res);
  }
  const second_domain_for_dl = `${uiConfig.second_domain_for_dl}`
  if (second_domain_for_dl == 'true') {
    const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/disable_download.html`);
    return new Response(await res.text(), {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    })
  } else if (res.ok) {
    const {
      headers
    } = res = new Response(res.body, res)
    headers.set("Content-Disposition", `attachment; filename="${file.name}"`);
    headers.set("Content-Length", file.size);
    authConfig.enable_cors_file_down && headers.append('Access-Control-Allow-Origin', '*');
    inline === true && headers.set('Content-Disposition', 'inline');
    return res;
  } else if (res.status == 404) {
    return new Response(not_found, {
      status: 404,
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    })
  } else if (res.status == 403) {
    const details = await res.text()
    return new Response(details, {
      status: 403,
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    })
  } else {
    const details = await res.text()
    /*const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/download_error.html`);
    return new Response(await res.text(), {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    })*/
    return new Response(details, {})
  }
}


String.prototype.trim = function(char) {
  if (char) {
    return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
  }
  return this.replace(/^\s+|\s+$/g, '');
};


function decodeJwtToken(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request, event).catch(
    (err) => new Response("Report this page when asked at the time of support... ==> " + err.stack, { status: 500 })
  )
  );
});
