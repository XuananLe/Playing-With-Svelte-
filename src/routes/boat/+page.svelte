<script lang="ts">
    import type { PageData } from './$types';
    import {enhance} from '$app/forms';

    export let data: PageData;
</script>

{data.boatname}
<form action="?/rename" method="POST" use:enhance >
    <input type="text" name="boatname"/>
    <button formaction="?/captitalize">Rename</button>
    <button type="submit">Submit</button>
</form>