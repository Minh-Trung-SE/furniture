const {JsonResult} = require("@helpers/JsonResult");
const {HTTP_CODE, HTTP_REASON} = require("@helpers/HttpStatus");
const crypto = require("crypto");
const querystring = require('querystring');


/**
 * Format a date object into a string in the format "yyyymmddHHmmss".
 * @param {Date} date The date object to format.
 * @returns {string} The formatted date string.
 */
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

class VNPayService {
    /**
     * Register a new user
     * @async
     * @static
     * @returns {Promise<JsonResult>}
     */
    static async generateUrl() {
        const ip = "127.0.0.1";
        const VNPAY_URL = process.env.VNPAY_URL

        const params = {
            'vnp_Command': 'pay',
            'vnp_Amount': 8000,
            'vnp_CreateDate': formatDate(new Date()),
            'vnp_CurrCode': "USD",
            'vnp_IpAddr': ip,
            'vnp_Locale': "vn",
            'vnp_OrderInfo': "Purchase",
            'vnp_OrderType': "other",
            'vnp_ReturnUrl': "http://localhost:8080/vnpay/return",
            'vnp_TmnCode': process.env.VNPAY_CODE,
            'vnp_TxnRef': crypto.randomUUID().toString(),
            'vnp_Version': '2.1.0',
        };

        const sortedParams = Object.fromEntries(Object.entries(params).sort());

        const signData = querystring.stringify(sortedParams);

        const hmac = crypto.createHmac("sha512", process.env.VNPAY_HASH_SECRET);

        const query = querystring.stringify(
            Object.assign(
                sortedParams,
                {
                    vnp_SecureHash: hmac.update(Buffer.from(signData, "utf-8")).digest("hex")
                }
            )
        )

        return JsonResult.builder(
            HTTP_CODE.OK,
            HTTP_CODE.OK,
            `${VNPAY_URL}?${query}`,
            HTTP_REASON.OK
        )
    }

    static async return() {
        return JsonResult.builder(
            HTTP_CODE.OK,
            HTTP_CODE.OK,
            "OK",
            HTTP_REASON.OK
        )
    }
}

module.exports = {
    VNPayService
}