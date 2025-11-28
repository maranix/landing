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

test('Bento cards have correct structure', async ({ page }) => {
	await page.goto('/');

	// Check that cards are links
	const cards = page.locator('#projects a');
	const count = await cards.count();
	expect(count).toBe(4); // 4 project cards

	// Check that cards have hover effects
	const firstCard = cards.first();
	await expect(firstCard).toHaveClass(/hover:border-primary/);
});

test('Bento cards display tech stacks', async ({ page }) => {
	await page.goto('/');

	// Check for tech stack labels
	await expect(page.getByText('React, Node.js, PostgreSQL')).toBeVisible();
	await expect(page.getByText('Vue, Firebase, TailwindCSS')).toBeVisible();
	await expect(page.getByText('Python, Django, Docker')).toBeVisible();
});
