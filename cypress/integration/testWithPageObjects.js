import { onDatepickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with Page Pbejcts', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.toasterPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
    })

    it.only('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Anna', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndEmail('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(1)
        onDatepickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Anna', 'Test')
        onSmartTablePage.updateAgeByFirstName('Anna', '35')
        onSmartTablePage.deleteRowByIndex(1)
    })
})