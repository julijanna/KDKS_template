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
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/editor.css" type="text/css" />
</head>

<body>
    <section class='top__menu'>
        <div class='logo'>
            <img src="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/images/kdkswhite-1.svg" alt="Custom image" class="logo_photo" />
        </div>
        <a id="burger__menu" class="burger__menu mobile__content" role="button" aria-label="Menu">
            <div class="burger__menu__box">
                <div class="burger__menu__inner"></div>
            </div>
        </a>
        <div class='main__menu desktop__content'>
            <jdoc:include type="modules" name="position-1" style="none" />
        </div>
        <div class='social desktop__content'>
            <jdoc:include type="modules" name="position-2" style="none" />
        </div>
        <div class='languages'>
            <ul id='languages__list'>
                <li id='de__main'><a href="https://kraftdreikampf.ch/de/">DE</a></li>
                <li id='fr__main'><a href="https://kraftdreikampf.ch//">FR</a></li>
            </ul>
        </div>

    </section>

    <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/app.js"></script>
</body>

</html>