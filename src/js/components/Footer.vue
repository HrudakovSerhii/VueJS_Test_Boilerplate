<template>
  <div class="c-footer">
    <div class="c-footer-c">
        <div class="c-footer-logo-container">
            <div class="c-footer-logo centered"></div>
        </div>
        <div class="c-footer-links-container">
            <ul class="c-footer-links">
                <li>
                    <address class="footer-links-text">Copyright © 2017 H.J. Heinz B.V.</address>
                </li>
                <li class="h-spacer">|</li>
                <li>
                    <a class="footer-links-text" href="/" target="_blank">
                        Actievoorwarden
                    </a>
                </li>
                <li class="h-spacer">|</li>
                <li>
                    <a class="footer-links-text" href="/" target="_blank">Privacy</a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<style lang="scss">

	.c-footer {
		position: absolute;
		width: 100%;
		height: 51px;
		bottom: 0;
		background-color: white;

		.c-footer-c {
			display: inline-block;
    		width: 50%;

    		.c-footer-links-container {
    			widows: 100%;

    			.c-footer-links {
    				list-style-type: none;

    				li {
    					display: inline-block;
    				}
    			}
    		}
		}
	}

</style>
