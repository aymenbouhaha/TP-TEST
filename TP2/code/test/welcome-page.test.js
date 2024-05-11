import { Builder, By, Key, until } from 'selenium-webdriver'
import {describe, it, beforeEach, afterEach, expect} from "vitest";

describe('Test Page de bienvenue', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Assertion Réussite', async function() {
    await driver.get("https://safatelli.github.io/tp-test-logiciel/assets/hello.html")
    await driver.findElement(By.id("username")).click()
    await driver.findElement(By.id("username")).sendKeys("aymen bouhaha")
    await driver.findElement(By.css("button")).click()
    const result = await driver.findElement(By.id("message"))
    const textContent= await result.getText()
    expect(textContent).toEqual("Bonjour, aymen bouhaha !")
  })
  it('Assertion échoue', async function() {
    await driver.get("https://safatelli.github.io/tp-test-logiciel/assets/hello.html")
    await driver.findElement(By.id("username")).click()
    await driver.findElement(By.id("username")).sendKeys("aymen")
    await driver.findElement(By.css("button")).click()
    const result = await driver.findElement(By.id("message"))
    const textContent= await result.getText()
    expect(textContent).toEqual("Bonjour, aymen bouhaha !")
  })
})
