<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- ══ NAV ══ -->
<nav class="nav" id="nav">
  <div class="nav-wrap">
    <a href="<?php echo home_url(); ?>" class="logo-link">
      <div class="logo-icon">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C9.5 2 7.5 4 7.5 6.5S9.5 11 12 11s4.5-2 4.5-4.5S14.5 2 12 2zm-6 9c-1.5 0-3 1-3 2.5S4.5 16 6 16s3-1 3-2.5S7.5 11 6 11zm12 0c-1.5 0-3 1-3 2.5S16.5 16 18 16s3-1 3-2.5S19.5 11 18 11zM8 17c-2.2 0-4 1.4-4 3h16c0-1.6-1.8-3-4-3a5 5 0 0 1-4-2 5 5 0 0 1-4 2z"/>
        </svg>
      </div>
      <div>
        <p class="logo-name">Dra. Zozo Ramos</p>
        <p class="logo-sub">Nutrição Animal</p>
      </div>
    </a>

    <ul class="nav-links" id="nav-links">
      <li><a href="<?php echo home_url(); ?>" data-section="inicio">Início</a></li>
      <li><a href="<?php echo get_permalink(get_page_by_title('Sobre')); ?>" data-section="sobre">Sobre</a></li>
      <li><a href="<?php echo get_permalink(get_page_by_title('Serviços')); ?>" data-section="servicos">Serviços</a></li>
      <li><a href="<?php echo get_permalink(get_page_by_title('E-books')); ?>" data-section="ebooks">E-books</a></li>
      <li><a href="<?php echo home_url('/blog'); ?>" data-section="artigos">Artigos</a></li>
      <li><a href="<?php echo get_permalink(get_page_by_title('Contato')); ?>" data-section="contato">Contato</a></li>
    </ul>

    <a href="https://wa.me/5500000000000" target="_blank" class="btn-wa">
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.52 18.4a9.9 9.9 0 0 1-5.04-1.37l-.36-.21-3.72.98.99-3.63-.24-.37A9.88 9.88 0 0 1 2.1 12 9.9 9.9 0 0 1 12 2.1c2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.89 7c0 5.46-4.44 9.9-9.9 9.88zm5.43-7.43c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.64.07a8.15 8.15 0 0 1-2.39-1.47 8.97 8.97 0 0 1-1.65-2.06c-.17-.3 0-.46.13-.6.12-.13.3-.34.44-.51.15-.17.2-.3.3-.5s.05-.38-.02-.53c-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.38S6 9.13 6 10.33s.84 2.46.96 2.63c.12.17 1.65 2.52 4 3.53.56.24 1 .39 1.34.5.56.18 1.07.15 1.48.09.45-.07 1.38-.56 1.57-1.1.2-.54.2-1 .14-1.1-.05-.09-.23-.15-.5-.3z"/></svg>
      Fale comigo
    </a>

    <button class="hamburger" id="hamburger">
      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>
  <div class="mobile-menu" id="mobile-menu">
    <a href="<?php echo home_url(); ?>">Início</a>
    <a href="<?php echo get_permalink(get_page_by_title('Sobre')); ?>">Sobre</a>
    <a href="<?php echo get_permalink(get_page_by_title('Serviços')); ?>">Serviços</a>
    <a href="<?php echo get_permalink(get_page_by_title('E-books')); ?>">E-books</a>
    <a href="<?php echo home_url('/blog'); ?>">Artigos</a>
    <a href="<?php echo get_permalink(get_page_by_title('Contato')); ?>">Contato</a>
  </div>
</nav>