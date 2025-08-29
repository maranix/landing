<script>
    import { ARIA, LINKS } from "$lib/constants";
    import {
        AnchorLinkButton,
        GitHubIcon,
        MailIcon,
        LinkedInIcon,
        XIcon,
    } from "..";
</script>

<!-- HTML -->
<footer class="container">
    <AnchorLinkButton
        href={LINKS.email}
        ariaLabel={ARIA.email}
        icon={MailIcon}
    />
    <AnchorLinkButton
        href={LINKS.github}
        ariaLabel={ARIA.github}
        icon={GitHubIcon}
    />
    <AnchorLinkButton
        href={LINKS.linkedin}
        ariaLabel={ARIA.linkedin}
        icon={LinkedInIcon}
    />
    <AnchorLinkButton href={LINKS.x} ariaLabel={ARIA.x} icon={XIcon} />
</footer>

<!-- Style -->
<style>
    .container {
        position: fixed;
        bottom: 0;

        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;

        gap: 1rem;
    }
</style>
