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
    <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/editor.css" type="text/css" />
</head>

<body>
    <section class='top_menu'>
        <div class='logo'>
            <img src="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/images/kdkswhite-1.svg" alt="Custom image" class="logo_photo" />
        </div>
        <div class='social'>
            <jdoc:include type="modules" name="position-2" style="none" />
        </div>
        <div class='languages'>
            <ul>
                <li id='de__main'><a href="https://kraftdreikampf.ch/de/">DE</a></li>
                <li id='fr__main'><a href="https://kraftdreikampf.ch//">FR</a></li>
            </ul>
        </div>
        <div class='main_menu'>
            <jdoc:include type="modules" name="position-1" style="none" />
        </div>

    </section>
</body>

</html>