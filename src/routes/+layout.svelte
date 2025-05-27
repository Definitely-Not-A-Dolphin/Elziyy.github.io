<!-- General layout -->

<script lang="ts">
  // Get all the pages
  let { children } = $props();
</script>

<!-- Render the page you are on -->
{@render children()}

<p class="p1 centerp">
  <a href="/">homepage</a>
  <a href="/projects">projects or sumthing</a>
</p>
