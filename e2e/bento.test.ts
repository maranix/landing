import { expect, test } from '@playwright/test';

test('Bento section is visible and has cards', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('#projects')).toBeVisible();
	await expect(page.getByText('Selected Works')).toBeVisible();

	// Check for specific project cards
	await expect(page.getByText('Project Alpha')).toBeVisible();
	await expect(page.getByText('Project Beta')).toBeVisible();
	await expect(page.getByText('Project Gamma')).toBeVisible();
	await expect(page.getByText('Project Delta')).toBeVisible();

	// Check for "Coming Soon" badge
	await expect(page.getByText('Coming Soon')).toBeVisible();
});
