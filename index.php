<?php

/**
 * @package     Joomla.Site
 * @subpackage  Template.system
 *
 * @copyright   Copyright (C) 2005 - 2020 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

// include __DIR__ . '/component.php';

?>

<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>">

<head>
    <jdoc:include type="head" />
    <link rel="shortcut icon" href="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/images/kdkswhite-1.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/editor.css" type="text/css" />
</head>

<body>
    <section class='top__menu'>
        <div class='logo'>
            <a href='/'><img src="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/images/kdkswhite-1.svg" alt="Custom image" class="logo_photo" /></a>
        </div>
        <a id="burger__menu" class="burger__menu mobile__menu" role="button" aria-label="Menu">
            <div class="burger__menu__box">
                <div class="burger__menu__inner"></div>
            </div>
        </a>
        <div class='main__menu desktop__menu'>
            <jdoc:include type="modules" name="position-1" style="none" />
        </div>
        <div class='social desktop__menu'>
            <jdoc:include type="modules" name="position-2" style="none" />
        </div>
        <div class='languages'>
            <ul id='languages__list'>
                <li id='de__main'><a href="/de/">DE</a></li>
                <li id='fr__main'><a href="/fr/">FR</a></li>
            </ul>
        </div>

    </section>

    <section class='main__section'>
        <div class='slideshow desktop__content' id="slideshow">
            <jdoc:include type="modules" name="position-4" style="none" />
        </div>
        <div class='articles'>
        <jdoc:include type="message" />
        <div id="clubs__chart__div">
            <jdoc:include type="modules" name="position-3" style="none" />
            </div>
            <jdoc:include type="component" />
        </div>
    </section>

    <section class='footer'>
        <p class='footer__text'><a href="/impressum/">Datenschutz / Impressum<a></p>
    </section>

    <section class='cookie__banner'>
        <jdoc:include type="modules" name="position-5" style="none" />
    </section>

    <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/app.js"></script>
</body>

</html>