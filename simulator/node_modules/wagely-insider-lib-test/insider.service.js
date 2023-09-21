import { v4 as uuidv4 } from 'uuid';

const insiderService = {
  init: window => {
    window &&
      window.Insider &&
      window.Insider.eventManager.dispatch('init-manager:re-initialize');
  },
  trackingEvent: (window, name, params) => {
    // params type for web is object
    window &&
      window.Insider &&
      window.Insider.track('events', [
        {
          event_name: name,
          event_params: params || {},
        },
      ]);
  },
  setInsiderIdentifier: (window, profile) => {
    const user = {
      uuid: profile.userId,
      gender: profile.gender, // default attr from insider: Gender
      birthday: profile.dob, // default attr from insider: Birthday
      gdpr_optin: true, // default attr from insider: GDPR Optin
      name: profile.fullName, // default attr from insider: Name
      email_optin: false, // default attr from insider: Email Optin
      phone_number: profile.phone?.substring(1), // default attr from insider: Phone Number
      sms_optin: true, // default attr from insider: SMS Optin
      whatsapp_optin: true, // default attr from insider: WA Optin
      language: profile.userPreferredLanguage, // default attr from insider: Language
      email: profile.email, // default attr from insider: Email Address
      registration_date: profile.registrationDate,
      country_id: profile.countryId,
      country_name: profile.countryName,
      company_name: profile.companyName,
      company_id: profile.companyId?.replace(/^WG-0+/, ''),
      employee_status: profile.employeeStatus,
      brand_name: profile.brandName,
      industry: profile.industry,
      bank_code: profile.bankCode,
      user_status: profile.userStatus,
      wage: profile.wage,
    };
    window && window.Insider?.setUserId(user.uuid || uuidv4());
    return user;
  },
  getInsiderInboxList: () => {},
};

export default insiderService;
