import axios from "axios";

const BANK_API_BASE_REG_URL = "http://localhost:9191/api/app/register";
const BANK_API_BASE_LOG_URL = "http://localhost:9191/api/app/login";
const BANK_API_BASE_DISPLAY_URL = "http://localhost:9191/api/app/displayhome";
const BANK_API_BASE_CPDAM_URL = "http://localhost:9191/api/app/pdambill";
const BANK_API_BASE_PPDAM_URL = "http://localhost:9191/api/app/pdampayment";
const BANK_API_BASE_CBPJS_URL = "http://localhost:9191/api/app/bpjsbill";
const BANK_API_BASE_PBPJS_URL = "http://localhost:9191/api/app/bpjspayment";


class BankService {

    regUser(modelRegister) {
        return axios.put(BANK_API_BASE_REG_URL, modelRegister);
    }
    logUser(modelLogin) {
        return axios.post(BANK_API_BASE_LOG_URL, modelLogin);
    }
    getDisplay(bankAccount) {
        return axios.get(BANK_API_BASE_DISPLAY_URL + "/" + bankAccount);
    }
    getBillPdam(modelBill) {
        return axios.post(BANK_API_BASE_CPDAM_URL, modelBill);
    }
    getDisplayPDAM(memberNum) {
        return axios.get(BANK_API_BASE_CPDAM_URL + "/" + memberNum);
    }
    letPayPDAM(memberNum, modelTrans) {
        return axios.put(BANK_API_BASE_PPDAM_URL + "/" + memberNum, modelTrans);
    }
    getBillBpjs(modelBill) {
        return axios.post(BANK_API_BASE_CBPJS_URL, modelBill);
    }
    getDisplayBPJS(memberNum) {
        return axios.get(BANK_API_BASE_CBPJS_URL + "/" + memberNum);
    }
    letPayBPJS(memberNum, modelTrans) {
        return axios.put(BANK_API_BASE_PBPJS_URL + "/" + memberNum, modelTrans);
    }
}

export default new BankService()