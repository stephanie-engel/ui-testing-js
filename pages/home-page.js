import { Selector, t } from 'testcafe';

export default class HomePage {
    constructor () {
        this.shopNowButton = Selector('#homeslider > li:nth-child(4) > div > p:nth-child(3) > button')
    }
}