import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('study playwright');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('drink water 1L');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('walk 10min');
  await page.getByTestId('text-input').press('Enter');
  await page.locator('html').click();
  await page.getByRole('listitem').filter({ hasText: 'walk 10min' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('study playwright')).toBeVisible();
  await expect(page.getByTestId('todo-list')).toContainText('drink water 1L');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('heading', { name: 'todos' }).click();
});