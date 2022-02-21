<script lang="ts">
</script>

<div>
	<div class="glass">
		<div class="aboutme-desc-cls">
			<p><slot /></p>
		</div>
	</div>
</div>

<style lang="scss">
	.aboutme-desc-cls {
		padding: 2rem;

		p {
			font-size: 1rem;
			font-weight: normal;
			margin: 0;
			text-align: left;
		}

		@media (min-width: 768px) {
			padding: 2rem;
			p {
				text-align: justify;
				font-size: 1.5rem;
				line-height: normal;
			}
		}
	}
</style>
