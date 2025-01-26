export const vastErrorCode = {
    PARSING_ERROR: 100, // XML parsing error

    SCHEMA_VALIDATION_ERROR: 101, // VAST schema validation error

    INVALID_VAST_VERSION: 102, // VAST version of response not supported

    AD_TYPE_NOT_SUPPORTED: 200, // Trafficking error. The video player received an ad type that it was not expecting and/or cannot display

    GENERAL_WRAPPER_ERROR: 300, // General wrapper error

    TIMEOUT_ERROR: 301, // Timeout of VAST URI provided in wrapper element or of VAST URI provided in a subsequent wrapper element

    WRAPPER_LIMIT_REACHED: 302, // Wrapper limit reached. Too many wrapper responses have been received with no inLine response

    NO_AD_FOUND_IN_WRAPPER: 303, // No ads VAST response after one or more wrappers

    GENERAL_LINEAR_ERROR: 400, // General linear error. The video player is unable to display the linear ad

    FILE_NOT_FOUND: 401, // File not found. Unable to find linear/mediaFile from URI

    MEDIA_MIME_TYPE_NOT_SUPPORTED: 403, // File not found. Unable to find linear/mediaFile from URI

    GENERAL_NON_LINEAR_AD: 500, // General NonLinearAds error

    GENERAL_COMPANION_ERROR: 600, // General Companion ad error

    UNEXPECTED_ERROR: 900, // Could not find a media file that is supported, based on the attributes of the MediaFile element

    GENERAL_VPAID_ERROR: 900, // General VPAID error
};
