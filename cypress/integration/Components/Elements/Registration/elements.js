/** @format */

// This is where elements from Registration page are Stored
export default {
    // Play button inside Banner
    rBannerPlayBtn: '.banner__link',
    // Register Through Facebook btn
    rFormFacebookBtn: '.form__section--links > .socials > :nth-child(1) > .socials__link > .icon-facebook',
    // Register Through Google btn
    rFormGoogleBtn: 'div.form__section > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
    // Register Through Telegram btn
    rFormTelegramBtn: 'div.form__section > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)',
    // Use email to register btn
    rUseEmailBtn: 'li.last:nth-child(2).first',
    // Use phone to register button
    rUsePhoneBtn: '.selectric-scroll > ul > [data-index="1"]',
    // email input
    rEmailInput: '[data-test="input-email"]',
    // phone input
    rPhoneInput: '[data-test="input-phone"]',
    // password input
    rPassInput: '[data-test="input-password"]',
    // confirm password input
    rRePassInput: '[data-test="input-password_confirmation"]',
    // Terms & Conditions CheckBox
    rConditionChkBox: '.input__wrapper > label',
    // Secret Question Dropdown button
    rSecretQuestionDropDown: ':nth-child(7) > .input__wrapper > .selectric-wrapper > .selectric > .label',
    // First selection from Secret Question Dropdown
    rSecretQuestionDropDownSelection: ':nth-child(7) > .input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > [data-index="1"]',
    //  Answer to secret question input
    rAnswerInput: '[data-test="input-secret_answer"]',
    // Registration Submit Form Button
    rRegisterBtn: '[data-test="control-submit"]',
    // Login Name Input 
    rLoginInput: '[data-test="input-username"]',
    // Btn that will drop down countries for phone number countries
    rPhoneFlag: '.iti__selected-flag',
    // US Phone Selector
    rCountryFlagUS: '#iti-0__item-us-preferred',
    // Error in email Validation text
    rEmailValidationError: '[data-test="error-email"]',
    // Error in password Validation text
    rPasswordValidationError: '[data-test="error-password"]',
    // Error in confirm password Validation text
    rConfirmPasswordValidationError: '[data-test="error-password_confirmation"]',
    // Error in accept terms checkbox text
    rTermsConditionsValidationError: '[data-test="error-terms_and_conditions"]'
  };