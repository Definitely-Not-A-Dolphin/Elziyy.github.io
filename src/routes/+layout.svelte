<!-- General layout -->

<script lang="ts">
  let { children } = $props(); // Get all the pages
</script>

<!-- Render the page you are on -->
{@render children()}

<p class="p1 centerp">
  <a href="/">homepage</a>
  <a href="/projects">projects or sumthing</a>
</p>
