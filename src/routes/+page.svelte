<!-- THis is basically the homepage -->
<script lang="ts">
  const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let dolphinSrc: string =
    "https://avatars.githubusercontent.com/u/158269354?v=4";
</script>

<h1 class="center">Something</h1>
<p class="p1 centerp">
  No clue what i will put here yet, hoping an idea will teleport in my head soon
  tho <br />
  Thats all
</p>

<br /> <br /> <br />

{#if randomInt(1, 6) === 6}
  <p class="p1 centerp">
    I got help from:<br />
    <a href="https://github.com/definitely-not-a-dolphin">
      <img class="smallpfp" alt="definitely not a dolphin" src={dolphinSrc} />
    </a>
  </p>
{/if}
