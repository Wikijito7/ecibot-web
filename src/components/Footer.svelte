<script>
    let year = new Date().getFullYear();
    import "../scss/app.scss"
</script>

<footer>
    <p>
        Ecibot's website <i class="fas fa-code"></i> with <i class="fas fa-heart"></i> by Wokis.<br>
        Copyright © {year} Wokis.<br>
        <a href="https://github.com/Wikijito7/Wikijito7.github.io">I'm open source!</a>
    </p>
</footer>

<style lang="scss">
    @use "../scss/dimens";
    @use "../scss/colors";

    footer {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        padding: 1em 0;

        p {
            font-size: dimens.$body1;
            text-align: center;
            margin: 0;
        }

        .fa-code {
            color: colors.$code;
        }

        .fa-heart {
            color: colors.$heart;
        }
    }
</style>