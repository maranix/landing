import { expect, test } from '@playwright/test';

test('Hero section displays correctly', async ({ page }) => {
	await page.goto('/');

	// Check hero heading - use role to avoid strict mode violation
	const heading = page.getByRole('heading', { level: 1 });
	await expect(heading).toContainText('RAMAN');
	await expect(heading).toContainText('VERMA');

	// Check hero description
	await expect(page.getByText(/I build software with intention and care/i)).toBeVisible();
});

test('LetsConnect section displays correctly', async ({ page }) => {
	await page.goto('/');

	// Check section heading
	await expect(page.getByText('Turn Bold Ideas Into Reality')).toBeVisible();

	// Check email link
	const emailLink = page.getByRole('link', { name: /Start the Conversation/i });
	await expect(emailLink).toBeVisible();
	await expect(emailLink).toHaveAttribute('href', 'mailto:ramanverma4183@gmail.com');
});

test('Footer displays correctly', async ({ page }) => {
	await page.goto('/');

	// Check footer copyright text - use exact year
	await expect(page.getByText('© 2025 Raman Verma')).toBeVisible();
});
