<script lang="ts">
	export let myName: string;
</script>

<div class="hero">
	<h1>Hi, my name is <span>{myName}</span></h1>
	<p><slot /></p>
</div>

<style lang="scss">
	.hero {
		display: flex;
		align-items: baseline;
		justify-content: center;
		flex-direction: column;
		gap: 5rem;

		h1 {
			font-size: 5rem;
			font-weight: 600;
			line-height: normal;
			margin: 0;
			span {
				transition: background-position 500ms ease-in-out;
				color: transparent;
				background-clip: text;
				-webkit-background-clip: text;
				-moz-background-clip: text;
				background-size: cover;
				background-image: linear-gradient(to right, hsl(330, 81%, 60%), hsl(260, 90%, 65%));
				&:hover {
					animation: gradient-flow 2500ms infinite;
					-moz-animation: gradient-flow 2500ms infinite;
					-webkit-animation: gradient-flow 2500ms infinite;
					@keyframes gradient-flow {
						from {
							background-position: 0;
						}
						to {
							background-position: 16rem;
						}
					}
				}
			}
		}

		p {
			margin: 0;
			font-weight: 500;
			font-size: 3rem;
			line-height: normal;
		}
	}

	@media (max-width: 768px) {
		.hero {
			h1 {
				font-size: 5rem;
				text-align: left;
				// line-height: 4.5rem;
			}

			p {
				font-size: 1.75rem;
				text-align: left;
			}
		}
	}
</style>
