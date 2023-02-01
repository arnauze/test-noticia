'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-cdddba3dd2f6b0e00c79c3bc4e5dd8283990889160b876dd4df7333f07d02f3f8a3da1429ecf12e20af7cfbf72ec70a5d23ad57b3b7299a1d193bd3694ef661c"' : 'data-target="#xs-controllers-links-module-AppModule-cdddba3dd2f6b0e00c79c3bc4e5dd8283990889160b876dd4df7333f07d02f3f8a3da1429ecf12e20af7cfbf72ec70a5d23ad57b3b7299a1d193bd3694ef661c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-cdddba3dd2f6b0e00c79c3bc4e5dd8283990889160b876dd4df7333f07d02f3f8a3da1429ecf12e20af7cfbf72ec70a5d23ad57b3b7299a1d193bd3694ef661c"' :
                                            'id="xs-controllers-links-module-AppModule-cdddba3dd2f6b0e00c79c3bc4e5dd8283990889160b876dd4df7333f07d02f3f8a3da1429ecf12e20af7cfbf72ec70a5d23ad57b3b7299a1d193bd3694ef661c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-cdddba3dd2f6b0e00c79c3bc4e5dd8283990889160b876dd4df7333f07d02f3f8a3da1429ecf12e20af7cfbf72ec70a5d23ad57b3b7299a1d193bd3694ef661c"' : 'data-target="#xs-injectables-links-module-AppModule-cdddba3dd2f6b0e00c79c3bc4e5dd8283990889160b876dd4df7333f07d02f3f8a3da1429ecf12e20af7cfbf72ec70a5d23ad57b3b7299a1d193bd3694ef661c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cdddba3dd2f6b0e00c79c3bc4e5dd8283990889160b876dd4df7333f07d02f3f8a3da1429ecf12e20af7cfbf72ec70a5d23ad57b3b7299a1d193bd3694ef661c"' :
                                        'id="xs-injectables-links-module-AppModule-cdddba3dd2f6b0e00c79c3bc4e5dd8283990889160b876dd4df7333f07d02f3f8a3da1429ecf12e20af7cfbf72ec70a5d23ad57b3b7299a1d193bd3694ef661c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductsModule-56786a1d106c249021412f75141b5dd8a9b366aebf0ae4505196e973ec6dfee78d83f9e538585d3e4c9d499ac491c36911e5af1e3069442353b76632c155b927"' : 'data-target="#xs-controllers-links-module-ProductsModule-56786a1d106c249021412f75141b5dd8a9b366aebf0ae4505196e973ec6dfee78d83f9e538585d3e4c9d499ac491c36911e5af1e3069442353b76632c155b927"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-56786a1d106c249021412f75141b5dd8a9b366aebf0ae4505196e973ec6dfee78d83f9e538585d3e4c9d499ac491c36911e5af1e3069442353b76632c155b927"' :
                                            'id="xs-controllers-links-module-ProductsModule-56786a1d106c249021412f75141b5dd8a9b366aebf0ae4505196e973ec6dfee78d83f9e538585d3e4c9d499ac491c36911e5af1e3069442353b76632c155b927"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductsModule-56786a1d106c249021412f75141b5dd8a9b366aebf0ae4505196e973ec6dfee78d83f9e538585d3e4c9d499ac491c36911e5af1e3069442353b76632c155b927"' : 'data-target="#xs-injectables-links-module-ProductsModule-56786a1d106c249021412f75141b5dd8a9b366aebf0ae4505196e973ec6dfee78d83f9e538585d3e4c9d499ac491c36911e5af1e3069442353b76632c155b927"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-56786a1d106c249021412f75141b5dd8a9b366aebf0ae4505196e973ec6dfee78d83f9e538585d3e4c9d499ac491c36911e5af1e3069442353b76632c155b927"' :
                                        'id="xs-injectables-links-module-ProductsModule-56786a1d106c249021412f75141b5dd8a9b366aebf0ae4505196e973ec6dfee78d83f9e538585d3e4c9d499ac491c36911e5af1e3069442353b76632c155b927"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ProductInterface.html" data-type="entity-link" >ProductInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});