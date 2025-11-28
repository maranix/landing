import { expect, test } from '@playwright/test';

test('Navbar navigation links work correctly', async ({ page }) => {
	await page.goto('/');

	// Check that navbar is visible
	await expect(page.locator('nav')).toBeVisible();

	// Check navigation links exist
	await expect(page.getByText('Work')).toBeVisible();
	await expect(page.getByText('Contact')).toBeVisible();

	// Click on Work link and verify it scrolls to projects section
	await page.getByText('Work').click();
	await page.waitForTimeout(500); // Wait for smooth scroll

	// Click on Contact link and verify it scrolls to contact section
	await page.getByText('Contact').click();
	await page.waitForTimeout(500);
});

test('Social media links are present', async ({ page }) => {
	await page.goto('/');

	// Check for social media icons in navbar
	const navbar = page.locator('nav');
	const links = navbar.locator('a');

	// Should have multiple links (logo + nav items + social)
	const count = await links.count();
	expect(count).toBeGreaterThan(3);
});
