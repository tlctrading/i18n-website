<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
        <div id="content" class="site-main">
                <div class="container page-inner pt-5">
                        <h1>{{ t('terms_title') }}</h1>
                        <main>
                                <p>{{ t('terms_intro_welcome') }}</p>
                                <p>{{ t('terms_intro_generator') }}. {{ t('terms_intro_acceptance_1') }} {{t('terms_intro_changes') }} {{ t('terms_intro_rejection') }}.</p>
                                <p>{{ t('terms_intro_website_def') }}</p>
                                <div id="toc_container" class="no_bullets">
                                        <ul class="toc_list">
                                                <ul>
                                                        <li>
                                                                <a
                                                                        href="#1_Use_of_Website_and_Services">
                                                                        <span class="toc_number toc_depth_2">0.1</span>
                                                                        {{ t('section_1_title') }} </a>
                                                        </li>
                                                </ul>
                                                <li><a href="#2_Restrictions"><span
                                                                        class="toc_number toc_depth_1">1</span> {{
                                                                                t('section_2_title') }}</a></li>
                                                <li><a href="#3_Promotional_Materials_and_Newsletters"><span
                                                                        class="toc_number toc_depth_1">2</span>{{
                                                                                t('section_3_title') }}</a>
                                                </li>
                                                <li><a href="#4_Intellectual_Property"><span
                                                                        class="toc_number toc_depth_1">3</span> {{
                                                                                t('section_4_title') }}</a></li>
                                                <li><a href="#5_Privacy"><span
                                                                        class="toc_number toc_depth_1">4</span>{{
                                                                                t('section_5_title') }}</a>
                                                </li>
                                                <li><a href="#6_Links"><span
                                                                        class="toc_number toc_depth_1">5</span>{{
                                                                                t('section_6_title') }}</a>
                                                </li>
                                                <li><a href="#7_Prohibited_Uses"><span
                                                                        class="toc_number toc_depth_1">6</span>{{
                                                                                t('section_7_title') }}</a></li>
                                                <li><a href="#8_Support"><span
                                                                        class="toc_number toc_depth_1">7</span> {{
                                                                                t('section_8_title') }}</a></li>
                                                <li><a href="#9_Disclaimers"><span
                                                                        class="toc_number toc_depth_1">8</span>
                                                                {{ t('section_9_title') }}</a></li>
                                                <li><a href="#10_Limitation_of_Liability"><span
                                                                        class="toc_number toc_depth_1">9</span> {{
                                                                                t('section_10_title') }}</a></li>
                                                <li><a href="#11_Indemnification"><span
                                                                        class="toc_number toc_depth_1">10</span>{{
                                                                                t('section_11_title') }}</a></li>
                                                <li><a href="#12_Miscellaneous"><span
                                                                        class="toc_number toc_depth_1">11</span>{{
                                                                                t('section_12_title') }}</a></li>
                                        </ul>
                                </div>
                                <h5><span id="1_Use_of_Website_and_Services"><b>{{ t('section_1_title') }}</b></span>
                                </h5>
                                <p><span style="font-weight: 400;">{{ t('section_1_access') }} {{
                                        t('section_1_modifications') }}</span></p>
                                <p><span style="font-weight: 400;">{{ t('section_1_void') }}.
                                                {{ t('section_1_warranties_intro') }}: (a) {{
                                                        t('section_1_warranties_a')
                                                }} (b) {{ t('section_1_warranties_b') }};
                                                (c) {{ t('section_1_warranties_c') }} (d) {{ t('section_1_warranties_d')
                                                }}</span></p>
                                <p><span style="font-weight: 400;">{{ t('section_1_undertakings_def') }}“.</span></p>
                                <p><span style="font-weight: 400;">{{ t('section_1_verification') }} {{
                                        t('section_1_responsibility') }} {{ t('section_1_reporting') }}</span>
                                </p>
                                <p><span style="font-weight: 400;">{{ t('section_1_right_to_refuse') }} {{
                                        t('section_1_disclaimer_main') }} (i)
                                                {{ t('section_1_disclaimer_i') }}(ii) {{ t('section_1_disclaimer_ii') }}
                                                {{ t('section_1_platform_only') }}</span></p>
                                <p><span style="font-weight: 400;">You understand and agree that the Company: (a)
                                                {{ t('section_1_company_a') }} (b) {{ t('section_1_company_b') }} (c) {{
                                                        t('section_1_company_c') }} (d) {{ t('section_1_company_d"') }} {{
                                                        t('section_1_no_screening') }}</span></p>
                                <p><span style="font-weight: 400;">{{ t('section_1_full_disclaime') }}
                                                {{ t('section_1_risk') }} {{ t('section_1_no_sale') }}</span>
                                </p>

                                <h4><span id="2_Restrictions"><span
                                                        style="font-weight: 400;">{{ t('section_2_title') }}</span></span>
                                </h4>
                                <p><span style="font-weight: 400;">{{ t('section_2_intro') }} (a)
                                                {{ t('section_2_a"') }}(b) {{ t('section_2_b') }} (c) {{ t('section_2_c') }}
                                                (d)
                                                {{ t('section_2_d') }} (e) {{ t('section_2_e') }} (f) {{ t('section_2_f')
                                                }} (g) {{ t('section_2_g') }} (h)
                                                {{ t('section_2_h') }}</span></p>
                                <p><span style="font-weight: 400;">{{ t('section_2_content_warranties') }} (a) {{
                                                t('section_2_content_a') }} (b) {{ t('section_2_content_b') }} (c)
                                                {{ t('section_2_content_c') }} (d) {{ t('section_2_content_d') }} (e)
                                                {{ t('section_2_content_e') }}</span></p>
                                <p><span style="font-weight: 400;">{{ t('section_2_license_grant') }}
                                                {{ t('section_2_removal_right') }}</span></p>
                                <p><span style="font-weight: 400;">{{ t('section_2_no_liability_content') }}</span></p>

                                <h4><span id="3_Promotional_Materials_and_Newsletters"><span
                                                        style="font-weight: 400;">{{ t('section_3_title') }}</span></span>
                                </h4>
                                <p><span style="font-weight: 400;">{{ t('section_3_consent') }}</span></p>
                                <p><span style="font-weight: 400;">{{ t('section_3_third_party_ads') }} {{
                                                t('section_3_unsubscribe') }}</span></p>

                                <h4><span id="4_Intellectual_Property"><span
                                                        style="font-weight: 400;">{{ t('section_4_title') }}</span></span>
                                </h4>
                                <p><span style="font-weight: 400;">{{ t('section_4_ownership') }}.
                                                {{ t('section_4_license_meaning') }}
                                                {{ t('section_4_user_liability') }}</span></p>

                                <h4><span id="5_Privacy"><span
                                                        style="font-weight: 400;">{{ t('section_5_title') }}</span></span>
                                </h4>
                                <p><span style="font-weight: 400;">{{ t('section_5_no_save') }}
                                                {{ t('section_5_company_rights') }} {{ t('section_5_privacy_policy') }}
                                                {{ t('section_5_no_verification') }}
                                                {{ t('section_5_user_responsibility') }} {{ t('section_5_indemnification')
                                                }}
                                                {{ t('section_5_not_storage') }} {{ t('section_5_public_warning') }}</span>
                                </p>

                                <h4><span id="6_Links"><span
                                                        style="font-weight: 400;">{{ t('section_6_title') }}</span></span>
                                </h4>
                                <p><span style="font-weight: 400;">{{ t('section_6_description') }}
                                                {{ t('section_6_risk') }} {{ t('section_6_review_advice') }} {{
                                                t('section_6_full_disclaimer') }}</span></p>

                                <h4><span id="7_Prohibited_Uses"><span
                                                        style="font-weight: 400;">{{ t('section_7_title') }}</span></span>
                                </h4>
                                <p><span style="font-weight: 400;">{{ t('section_7_commercial') }} {{
                                                t('section_7_recruitment') }} {{ t('section_7_user_contact') }}</span></p>

                                <h4><span id="8_Support"><span
                                                        style="font-weight: 400;">{{ t('section_8_title') }}</span></span>
                                </h4>
                                <p><span style="font-weight: 400;">{{ t('section_8_text') }}</span></p>

                                <h4><span id="9_Disclaimers"><span
                                                        style="font-weight: 400;">{{ t('section_9_title') }}</span></span>
                                </h4>
                                <p><span style="font-weight: 400;">{{ t('section_9_security') }} {{ t('section_9_as_is') }}
                                                {{ t('section_9_no_warranties') }} {{t('section_9_no_advice')}} {{t('section_9_no_liability_advice')}}
                                               {{t('section_9_no_created_warrant')}}
                                                {{t('section_9_jurisdiction_note')}}.</span></p>

                                <h4><span id="10_Limitation_of_Liability"><span style="font-weight: 400;">{{t('section_10_title')}}</span></span></h4>
                                <p><span style="font-weight: 400;">{{t('section_10_no_guarantee')}} {{t('section_10_monitoring')}} {{t('section_10_exposure')}}</span></p>
                                <p><span style="font-weight: 400;">{{t('section_10_technical')}} {{t('section_10_conduct')}}</span></p>
                                <p><span style="font-weight: 400;">{{t('section_10_no_indirect')}} {{t('section_10_full_extent')}}</span>
                                </p>

                                <h4><span id="11_Indemnification"><span style="font-weight: 400;">{{ t('section_11_title') }}</span></span></h4>
                                <p><span style="font-weight: 400;">{{t('section_11_text')}}</span></p>

                                <h4><span id="12_Miscellaneous"><span style="font-weight: 400;">{{t('section_12_title')}}</span></span></h4>
                                <p><span style="font-weight: 400;">{{t('section_12_governing_law')}} {{t('section_12_jurisdiction')}} {{t('section_12_no_class_action')}}</span></p>
                                <p><span style="font-weight: 400;">{{t('section_12_limitation_period')}} {{t('section_12_severability')}} {{t('section_12_no_agency')}} {{t('section_12_entire_agreement')}}</span></p>
                                <p><span style="font-weight: 400;">{{t('section_12_notices')}}</span></p>
                                <p><span style="font-weight: 400;">{{t('section_12_no_assignment')}} {{t('section_12_no_limitation')}} {{t('section_12_no_waiver')}}</span></p>
                        </main>
                        <p><span class="u">{{t('section_12_viewer_responsibility')}}</span></p>
                </div>
        </div>
</template>