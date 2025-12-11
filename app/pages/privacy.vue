<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
        <div id="content" class="site-main">
                <div class="container page-inner pt-5">
                        <h1>{{ t('privacy.title') }}</h1>
                        <main>
                                <p>{{ t('privacy.intro.provider') }}</p>
                                <p>{{ t('privacy.intro.description') }}</p>
                                <p>{{ t('privacy.intro.usage') }}</p>
                                <div id="toc_container" class="no_bullets">
                                        <ul class="toc_list">
                                                <ul>
                                                        <li>
                                                                <ul>
                                                                        <li><a href="#Definitions"><span
                                                                                                class="toc_number toc_depth_3">0.0.1</span>
                                                                                        {{t('privacy.toc.definitions')}}</a>
                                                                                <ul>
                                                                                        <li><a href="#Service"><span
                                                                                                                class="toc_number toc_depth_4">0.0.1.1</span>
                                                                                                        {{t('privacy.toc.definitions.service')}}</a></li>
                                                                                </ul>
                                                                        </li>
                                                                        <li><a href="#Personal_Data"><span
                                                                                                class="toc_number toc_depth_3">0.0.2</span>
                                                                                        {{t('privacy.toc.definitions.personal_data')}}</a></li>
                                                                        <li><a href="#Usage_Data"><span
                                                                                                class="toc_number toc_depth_3">0.0.3</span>
                                                                                        {{t('privacy.toc.definitions.usage_data')}}</a>
                                                                        </li>
                                                                        <li><a href="#Cookies"><span
                                                                                                class="toc_number toc_depth_3">0.0.4</span>
                                                                                        {{t('privacy.toc.definitions.cookies')}}</a></li>
                                                                        <li><a href="#Data_Controller"><span
                                                                                                class="toc_number toc_depth_3">0.0.5</span>
                                                                                        {{t('privacy.toc.definitions.data_controller')}}</a></li>
                                                                        <li><a href="#Data_Processors_or_Service_Providers"><span
                                                                                                class="toc_number toc_depth_3">0.0.6</span>
                                                                                        {{t('privacy.toc.definitions.data_processors')}}</a></li>
                                                                        <li><a href="#Data_Subject_or_User"><span
                                                                                                class="toc_number toc_depth_3">0.0.7</span>
                                                                                       {{t('privacy.toc.definitions.data_subject')}}</a></li>
                                                                </ul>
                                                        </li>
                                                </ul>
                                                <li><a href="#Information_Collection_And_Use"><span
                                                                        class="toc_number toc_depth_1">1</span>
                                                               {{t('privacy.toc.info_collection')}}</a>
                                                        <ul>
                                                                <li>
                                                                        <ul>
                                                                                <li><a href="#Types_of_Data_Collected"><span
                                                                                                        class="toc_number toc_depth_3">1.0.1</span>
                                                                                                {{t('privacy.toc.info_collection.types_of_data')}}</a></li>
                                                                                <li><a href="#Personal_Data-2"><span
                                                                                                        class="toc_number toc_depth_3">1.0.2</span>
                                                                                                {{t('privacy.toc.info_collection.personal_data')}}</a></li>
                                                                                <li><a href="#Usage_Data-2"><span
                                                                                                        class="toc_number toc_depth_3">1.0.3</span>
                                                                                                {{ t('privacy.toc.info_collection.usage_data') }}</a></li>
                                                                                <li><a href="#Tracking_Cookies_Data"><span
                                                                                                        class="toc_number toc_depth_3">1.0.4</span>
                                                                                                {{t('privacy.toc.info_collection.tracking_cookies')}}</a></li>
                                                                                <li><a href="#Use_of_Data"><span
                                                                                                        class="toc_number toc_depth_3">1.0.5</span>
                                                                                               {{t('privacy.toc.info_collection.use_of_data')}}</a></li>
                                                                                <li><a href="#Legal_Basis_for_Processing_Personal_Data_Under_General_Data_Protection_Regulation_GDPR"><span
                                                                                                        class="toc_number toc_depth_3">1.0.6</span>
                                                                                                {{t('privacy.toc.info_collection.legal_basis')}}</a></li>
                                                                                <li><a href="#Retention_of_Data"><span
                                                                                                        class="toc_number toc_depth_3">1.0.7</span>
                                                                                                {{ t('privacy.toc.info_collection.retention') }}</a>
                                                                                </li>
                                                                        </ul>
                                                                </li>
                                                        </ul>
                                                </li>
                                                <li><a href="#Transfer_Of_Data"><span
                                                                        class="toc_number toc_depth_1">2</span>
                                                               {{t('privacy.toc.transfer')}}</a>
                                                        <ul>
                                                                <li>
                                                                        <ul>
                                                                                <li><a href="#Disclosure_Of_Data"><span
                                                                                                        class="toc_number toc_depth_3">2.0.1</span>
                                                                                                {{t('privacy.toc.transfer.disclosure')}} </a>
                                                                                        <ul><a href="#Disclosure_Of_Data">
                                                                                                </a>
                                                                                                <li><a href="#Disclosure_Of_Data"></a><a
                                                                                                                href="#Business_Transaction"><span
                                                                                                                        class="toc_number toc_depth_4">2.0.1.1</span>
                                                                                                                {{t('privacy.toc.transfer.disclosure.business_transaction')}}</a>
                                                                                                </li>
                                                                                        </ul>
                                                                                </li>
                                                                                <li><a href="#Legal_Requirements"><span
                                                                                                        class="toc_number toc_depth_3">2.0.2</span>
                                                                                                {{t('privacy.toc.transfer.legal_requirements')}}</a>
                                                                                </li>
                                                                                <li><a href="#Security_Of_Data"><span
                                                                                                        class="toc_number toc_depth_3">2.0.3</span>
                                                                                                {{t('privacy.toc.transfer.security')}}</a>
                                                                                </li>
                                                                                <li><a href="#Your_Data_Protection_Rights_Under_General_Data_Protection_Regulation_GDPR"><span
                                                                                                        class="toc_number toc_depth_3">2.0.4</span>
                                                                                                {{t('privacy.toc.transfer.rights_gdpr')}}</a>
                                                                                </li>
                                                                        </ul>
                                                                </li>
                                                        </ul>
                                                </li>
                                                <li><a href="#Service_Providers"><span
                                                                        class="toc_number toc_depth_1">3</span>
                                                                {{t('privacy.toc.service_providers')}}</a>
                                                        <ul>
                                                                <li>
                                                                        <ul>
                                                                                <li><a href="#Analytics"><span
                                                                                                        class="toc_number toc_depth_3">3.0.1</span>
                                                                                                {{t('privacy.toc.service_providers.analytics')}}</a></li>
                                                                                <li><a href="#Advertising"><span
                                                                                                        class="toc_number toc_depth_3">3.0.2</span>
                                                                                                {{t('privacy.toc.service_providers.advertising')}}</a></li>
                                                                                <li><a href="#Behavioral_Remarketing"><span
                                                                                                        class="toc_number toc_depth_3">3.0.3</span>
                                                                                               {{t('privacy.toc.service_providers.behavioral_remarketing')}}</a></li>
                                                                                <li><a href="#Links_To_Other_Sites"><span
                                                                                                        class="toc_number toc_depth_3">3.0.4</span>
                                                                                                {{t('privacy.toc.service_providers.links')}}</a>
                                                                                </li>
                                                                                <li><a href="#Children8217s_Privacy"><span
                                                                                                        class="toc_number toc_depth_3">3.0.5</span>
                                                                                                {{ t('privacy.toc.service_providers.children_privacy') }}</a>
                                                                                </li>
                                                                                <li><a href="#Changes_To_This_Privacy_Policy"><span
                                                                                                        class="toc_number toc_depth_3">3.0.6</span>
                                                                                               {{t('privacy.toc.service_providers.changes')}}</a></li>
                                                                                <li><a href="#Contact_Us"><span
                                                                                                        class="toc_number toc_depth_3">3.0.7</span>
                                                                                               {{t('privacy.toc.service_providers.contact')}}</a></li>
                                                                        </ul>
                                                                </li>
                                                        </ul>
                                                </li>
                                        </ul>
                                </div>
                                <h4><span id="Definitions">{{t('privacy.toc.definitions')}}</span></h4>
                                <h5><span id="Service">{{t('privacy.toc.definitions.service')}}</span></h5>
                                <p><span>{{t('privacy.definitions.service')}}</span></p>
                                <h4><span id="Personal_Data">{{t('privacy.toc.definitions.personal_data')}}</span></h4>
                                <p>{{t('privacy.definitions.personal_data')}}</p>
                                <h4><span id="Usage_Data">{{t('privacy.toc.definitions.usage_data')}}</span></h4>
                                <p>{{t('privacy.definitions.usage_data')}}</p>
                                <h4><span id="Cookies">{{t('privacy.toc.definitions.cookies')}}</span></h4>
                                <p>{{ t('privacy.definitions.cookies') }}
                                </p>
                                <h4><span id="Data_Controller">{{t('privacy.toc.definitions.data_controller')}}</span></h4>
                                <p>{{t('privacy.definitions.data_controller')}}</p>
                                <h4><span id="Data_Processors_or_Service_Providers">{{ t('privacy.toc.definitions.data_processors') }}</span></h4>
                                <p>{{ t('privacy.definitions.data_processors') }}</p>
                                <h4><span id="Data_Subject_or_User">{{t('privacy.toc.definitions.data_subject')}}</span></h4>
                                <p>{{t('privacy.definitions.data_subject')}}</p>
                                <h2><span id="Information_Collection_And_Use">{{t('privacy.toc.info_collection')}}</span></h2>
                                <p>{{ t('privacy.info_collection.description') }}</p>
                                <h4><span id="Types_of_Data_Collected">{{t('privacy.toc.info_collection.types_of_data')}}</span></h4>
                                <h4><span id="Personal_Data-2">{{t('privacy.toc.info_collection.personal_data')}}</span></h4>
                                <p>{{ t('privacy.info_collection.personal_data.description') }}
                                </p>
                                <ul>
                                        <li>{{t('privacy.info.user1')}}</li>
                                        <li>{{ t('privacy.info.user2') }}</li>
                                        <li>{{ t('privacy.info.user3') }}</li>
                                        <li>{{ t('privacy.info.user4') }}</li>
                                        <li>{{t('privacy.info.user5')}}</li>
                                </ul>
                                <p>{{ t('privacy.info_collection.personal_data.usage') }}</p>
                                <h4><span id="Usage_Data-2">{{t('privacy.toc.info_collection.usage_data')}}</span></h4>
                                <p>{{t('privacy.info_collection.usage_data.description')}}</p>
                                <h4><span id="Tracking_Cookies_Data">{{t('privacy.toc.info_collection.tracking_cookies": "Tracking Cookies Data')}}</span></h4>
                                <p>{{t('privacy.info_collection.cookies.description')}}</p>
                                <p>{{ t('privacy.info.collection.cookies.description1') }}</p>
                                <p>{{t('privacy.info.collection.cookies.instruct')}}</p>
                                <p>{{t('privacy.info_collection.cookies.examples')}}</p>
                                <ul>
                                        <li><strong>{{t('privacy.example1')}}</strong> {{t('privacy.example1.description')}}</li>
                                        <li><strong>{{ t('privacy.example2') }}</strong> {{ t('privacy.example2.description') }}</li>
                                        <li><strong>{{t('privacy.example3')}}</strong> {{ t('We use Security Cookies for security purposes') }}</li>
                                        <li><strong>{{t('Advertising Cookies.')}}</strong> {{ t('privacy.example4.description') }}
                                        </li>
                                </ul>
                                <h4><span id="Use_of_Data">{{t('privacy.toc.info_collection.use_of_data')}}</span></h4>
                                <p>{{ t('privacy.info_collection.use_of_data') }}</p>
                                <ul>
                                        <li>{{ t('provider1') }}</li>
                                        <li>{{ t('provider2') }}</li>
                                        <li>{{ t('provider3') }}</li>
                                        <li>{{ t('provider4') }}</li>
                                        <li>{{ t('provider5') }}</li>
                                        <li>{{ t('provider6') }}</li>
                                        <li>{{ t('provider7') }}</li>
                                        <li>{{ t('provider8') }}</li>
                                </ul>
                                <h4><span
                                                id="Legal_Basis_for_Processing_Personal_Data_Under_General_Data_Protection_Regulation_GDPR">{{t('privacy.toc.info_collection.legal_basis')}}</span></h4>
                                <p>{{ t('privacy.info_collection.legal_basis') }}</p>
                                <p>{{t('privacy.accept.info')}}</p>
                                <ul>
                                        <li>{{t('privacy.accept.info.why1')}}</li>
                                        <li>{{t('privacy.accept.info.why2')}}</li>
                                        <li>{{ t('privacy.accept.info.why3') }}</li>
                                        <li>{{t('privacy.accept.info.why4')}}</li>
                                </ul>
                                <h4><span id="Retention_of_Data">{{t('privacy.toc.info_collection.retention')}}</span></h4>
                                <p>{{t('privacy.info_collection.retentio')}}</p>
                                <p>{{ t('providerText') }}</p>
                                <h2><span id="Transfer_Of_Data">{{t('privacy.toc.transfer')}}</span></h2>
                                <p>{{ t('privacy.transfer.description') }}</p>
                                <p>{{ t('privacy.bolgaria') }}</p>
                                <p>{{ t('privacy.consent') }}</p>
                                <p>{{ t('privacy.provider.take') }}</p>
                                <h4><span id="Disclosure_Of_Data">{{t('privacy.toc.transfer.disclosure')}}</span></h4>
                                <h5><span id="Business_Transaction">{{t('privacy.toc.transfer.disclosure.business_transaction')}}</span></h5>
                                <p>{{t('privacy.transfer.disclosure.business_transaction')}}
                                </p>
                                <h4><span id="Legal_Requirements">{{t('privacy.toc.transfer.legal_requirements')}}</span></h4>
                                <p>{{t('privacy.transfer.legal_requirements')}}</p>
                                <ul>
                                        <li>{{t('requirments1')}}</li>
                                        <li>{{ t('requirments2') }}</li>
                                        <li>{{ t('requirments3') }}
                                        </li>
                                        <li>{{ t('requirments4') }}</li>
                                        <li>{{t('requirments5')}}</li>
                                </ul>
                                <h4><span id="Security_Of_Data">{{t('privacy.toc.transfer.security')}}</span></h4>
                                <p>{{t('privacy.transfer.security')}}</p>
                                <h4><span
                                                id="Your_Data_Protection_Rights_Under_General_Data_Protection_Regulation_GDPR">{{t('privacy.toc.transfer.rights_gdpr')}}</span></h4>
                                <p>{{ t('privacy.transfer.rights_gdpr') }} </p>
                                <p>{{ t('privacy.wishInformed') }}</p>
                                <p>{{t('privacy.certain.circums')}}</p>
                                <p>{{ t('privacy.your.access') }}
                                </p>
                                <p>{{ t('privacy.shouldNote') }}</p>
                                <p>{{t('right.complain')}}</p>
                                <h2><span id="Service_Providers">{{ t('privacy.toc.service_providers') }}</span></h2>
                                <p>{{t('privacy.service_providers.description')}}</p>
                                <h4><span id="Analytics">{{t('privacy.toc.service_providers.analytics')}}</span></h4>
                                <p>{{t('privacy.service_providers.analytics')}}</p>
                                <p><strong>{{ t('google.analytics') }}</strong><br> {{t('google.analytics.desc')}} <a
                                                href="/" target="_blank"
                                                rel="noopener">http://www.google.com/intl/en/policies/privacy/</a></p>
                                <h4><span id="Advertising">{{t('privacy.toc.service_providers.advertising')}}</span></h4>
                                <p>{{t('privacy.service_providers.advertising')}}</p>
                                <p><strong>{{t('google.adSense')}}</strong><br> {{ t('google.adSense.desc') }} <a href="/"
                                                target="_blank" rel="noopener">http://www.google.com/ads/preferences</a>
                                </p>
                                <h4><span id="Behavioral_Remarketing">{{t('privacy.toc.service_providers.behavioral_remarketing')}}</span></h4>
                                <p>{{ t('google.adSense.provider') }}</p>
                                <p><strong>{{t('google.adWords')}}</strong><br> {{ t('privacy.service_providers.behavioral_remarketing') }} <a href="http://www.google.com/settings/ads" target="_blank"
                                                rel="noopener">http://www.google.com/settings/ads</a> {{ t('google.also') }}
                                        {{t('google.adWords.rec')}} <a
                                                href="https://tools.google.com/dlpage/gaoptout" target="_blank"
                                                rel="noopener">https://tools.google.com/dlpage/gaoptout</a> {{t('google.analytics.your.browser')}} <a
                                                href="https://www.google.com/intl/en/policies/privacy/" target="_blank"
                                                rel="noopener">http://www.google.com/intl/en/policies/privacy</a></p>
                                <p><strong>{{t('facebook')}}</strong><br> {{t('facebook.remarketing')}} <a href="https://aivontrixen-app.com/" target="_blank"
                                                rel="noopener">./</a> {{t('facebook.ad')}} <a href="/"
                                                target="_blank"
                                                rel="noopener">https://www.facebook.com/help/568137493302217</a>
                                       {{t('facebook.adheres1')}}<a href="#"
                                                target="_blank" rel="noopener">./</a>, {{t('facebook.adheres2')}} <a href="/" target="_blank"
                                                rel="noopener">./</a> {{ t('facebook.adheres3') }} <a href="/" target="_blank"
                                                rel="noopener">./ </a>, {{t('facebook.adheres4')}} <a href="/" target="_blank"
                                                rel="noopener">./</a></p>
                                <h4><span id="Links_To_Other_Sites">{{t('privacy.toc.service_providers.links')}}</span></h4>
                                <p>{{t('privacy.service_providers.links')}}</p>
                                <p>{{ t('privacy.noControl') }}</p>
                                <h4><span id="Children8217s_Privacy"></span>{{ t('privacy.child') }}</h4>
                                <p>{{ t('privacy.service_providers.children') }}</p>
                                <h4><span id="Changes_To_This_Privacy_Policy"></span>{{ t('privacy.changes') }}</h4>
                                <p>{{ t('privacy.service_providers.changes') }}</p>
                                <p>{{ t('privacy.letKnow') }}</p>
                                <p>{{ t('privacy.advises') }}</p>
                                <h4><span id="Contact_Us">{{t('privacy.toc.service_providers.contact')}}</span></h4>
                                <p>{{ t('privacy.service_providers.contact') }}</p>
                        </main>
                </div>
        </div>

</template>