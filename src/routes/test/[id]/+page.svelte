<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Prueba de page, en este caso el id {data.title}</h1>
<p>{@html data.content}</p>
<p>{@html data.date}</p>