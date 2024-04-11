from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time

def test(testcase_number,first, second, operator, expected_output):
    #Setup driver
    options = webdriver.ChromeOptions()
    options.add_experimental_option("detach",True)
    driver = webdriver.Chrome(options = options)

    #Get link
    driver.get("http://localhost:5173/")

    #Get Element from web 
    element_first = driver.find_element(By.NAME, "first")
    element_second = driver.find_element(By.NAME, "second")
    dropdown_operator = Select(driver.find_element(By.NAME, "operator"))

    #Input
    element_first.send_keys(first)
    dropdown_operator.select_by_visible_text(operator)
    element_second.send_keys(second)
    button_calculate = driver.find_element(By.CLASS_NAME,"calculate-btn").click()

    #Get output 
    element_Input = driver.find_element(By.XPATH, '//*[@id="root"]/div[4]/h3[1]').text
    element_Summary = driver.find_element(By.XPATH, '//*[@id="root"]/div[4]/h3[2]').text

    #Check
    if element_Summary == expected_output :
        print("Testcase#" + testcase_number + " passed")
    else:
        print("Testcase#" + testcase_number + " failed")

    driver.close()
    
test('1', '5', '10', '+', 'Summary: 15')
test('2', '-5', '-10', '-', 'Summary: 5')
test('3','0','11','*','Summary: 0')
test('4','0','-12','/','Summary: 0')
test('5','78.99','11.11','+','Summary: 90.1')
test('6','-78.99','-11.11','-','Summary: -67.88')
test('7','0','22.33','*','Summary: 0')
test('8','0','-4.99','/','Summary: 0')
test('9', 'a', '5', '+', 'Summary: NaN')
test('10', 'o', 'k', '+', 'Summary: NaN')
test('11', '', '10', '+', 'Summary: NaN')
test('12', '', '', '+', 'Summary: NaN')