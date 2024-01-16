import { test, expect } from '@playwright/test'

test(' deve poder cadastrar uma nova tarefa ', async ({ page, request }) => {

    const taskName = 'Ler um livro de TypeScript'
    await request.delete('http://localhost:3333/helper/tasks/' + taskName)

    await page.goto('http://localhost:3000')

    const inputTaskName = page.locator('input[class*=listInputNewTask]')
    await inputTaskName.fill(taskName)
    
    await page.click('css=button >> text=Create')

    const target = page.locator(`css=.task-item p >> text=${taskName}`)
    await expect(target).toBeVisible()

})