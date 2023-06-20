            function copyIp() {
                navigator.clipboard
                    .writeText("Abiegnisgrad.aternos.me:37438")
                    .catch((error) => {
                        console.error(
                            `Failed to copy "${text}" to clipboard: ${error}`
                        );
                    });
					document.getElementById("ip").textContent="Copied!";
					setTimeout(() => {  document.getElementById("ip").textContent="Abiegnisgrad.aternos.me"; }, 1000);
            }