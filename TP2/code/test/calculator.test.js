import { Builder, By, Key, until } from 'selenium-webdriver'
import {describe, it, beforeEach, afterEach, expect} from "vitest";

describe('Test Calculator', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Test addition', async function() {
    await driver.get("https://safatelli.github.io/tp-test-logiciel/assets/calc.html")


    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("15")


    await driver.findElement(By.id("operator")).click()
    const dropdown = await driver.findElement(By.id("operator"))
    await dropdown.findElement(By.xpath("//option[. = '+']")).click()


    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("16")


    await driver.findElement(By.css("button")).click()


    expect(await driver.findElement(By.id("result")).getText()).toEqual("Résultat : 31");
  })

  it('Test subtraction', async function() {
    await driver.get("https://safatelli.github.io/tp-test-logiciel/assets/calc.html")


    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("15")


    await driver.findElement(By.id("operator")).click()
    const dropdown = await driver.findElement(By.id("operator"))
    await dropdown.findElement(By.xpath("//option[. = '-']")).click()


    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("5")


    await driver.findElement(By.css("button")).click()


    expect(await driver.findElement(By.id("result")).getText()).toEqual("Résultat : 10");
  })

  it('Test multiplication', async function() {
    await driver.get("https://safatelli.github.io/tp-test-logiciel/assets/calc.html")


    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("5")


    await driver.findElement(By.id("operator")).click()
    const dropdown = await driver.findElement(By.id("operator"))
    await dropdown.findElement(By.xpath("//option[. = '*']")).click()


    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("4")


    await driver.findElement(By.css("button")).click()


    expect(await driver.findElement(By.id("result")).getText()).toEqual("Résultat : 20");
  })

  it('Test division', async function() {
    await driver.get("https://safatelli.github.io/tp-test-logiciel/assets/calc.html")


    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("20")


    await driver.findElement(By.id("operator")).click()
    const dropdown = await driver.findElement(By.id("operator"))
    await dropdown.findElement(By.xpath("//option[. = '/']")).click()


    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("5")


    await driver.findElement(By.css("button")).click()


    expect(await driver.findElement(By.id("result")).getText()).toEqual("Résultat : 4");
  })

  it('Test division by zero', async function() {
    await driver.get("https://safatelli.github.io/tp-test-logiciel/assets/calc.html")


    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("20")


    await driver.findElement(By.id("operator")).click()
    const dropdown = await driver.findElement(By.id("operator"))
    await dropdown.findElement(By.xpath("//option[. = '/']")).click()


    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("0")

    // Click the calculate button
    await driver.findElement(By.css("button")).click()


    expect(await driver.findElement(By.id("result")).getText()).toEqual("Résultat : Infinity");
  })

  it('Test null or empty input fields', async function() {
    await driver.get("https://safatelli.github.io/tp-test-logiciel/assets/calc.html")

    await driver.findElement(By.css("button")).click()

    expect(await driver.findElement(By.id("result")).getText()).toEqual("");

  })


})
