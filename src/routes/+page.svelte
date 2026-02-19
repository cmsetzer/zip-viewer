<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/state";
  import ZipViewer from "$lib/ZipViewer.svelte";

  let searchParams: URLSearchParams = page.url.searchParams;
  let urlParam: string | null = $state(searchParams.get("url"));
  let errorMessage: string | null = $state(null);

  const validateZipUrl = async (url: string) => {
    const response = await fetch(url, { method: "HEAD" });
    if (!response.ok) {
      errorMessage = `ZIP file URL is not valid: ${url}. Status: ${response.status}.`;
      console.error(errorMessage);
      return false;
    }

    return true;
  };

  onMount(async () => {
    if (!urlParam) {
      urlParam = null;
    } else {
      const zipUrlIsValid = await validateZipUrl(urlParam);
      if (!zipUrlIsValid) {
        urlParam = null;
      }
    }
  });
</script>

<svelte:head>
  <title>ZIP Viewer</title>
</svelte:head>

{#if urlParam}
  <ZipViewer url={urlParam} />
{:else}
  <div class="h-screen w-screen flex flex-col items-center justify-center">
    <div class="max-w-200 p-8">
      {#if errorMessage}
        <p class="text-3xl font-semibold mb-4">Error</p>
        <p class="text-xl">
          {errorMessage}
        </p>
      {:else}
        <p class="text-3xl font-semibold mb-4">Valid ZIP file URL required</p>
        <p class="text-xl">
          Please provide a valid ZIP file URL via query parameter <code
            class="bg-source-200 dark:bg-source-800 text-source-800 dark:text-source-200 p-1 rounded-sm"
          >
            url
          </code>.
        </p>
      {/if}
    </div>
  </div>
{/if}
