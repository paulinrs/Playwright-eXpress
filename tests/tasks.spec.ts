import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

test(' deve poder cadastrar uma nova tarefa ', async ({ page }) => {
    await page.goto('http://localhost:3000')

    const inputTaskName = page.locator('input[class*=listInputNewTask]')
    await inputTaskName.fill(faker.lorem.words())
    
    await page.click('css=button >> text=Create')

})