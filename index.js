const ping = require('ping');
const colors = require('colors');

console.log("\n███████╗██╗   ██╗██╗████████╗███╗   ███╗███████╗".green);
console.log("██╔════╝██║   ██║██║╚══██╔══╝████╗ ████║██╔════╝".green);
console.log("███████╗██║   ██║██║   ██║   ██╔████╔██║███████╗".green);
console.log("╚════██║██║   ██║██║   ██║   ██║╚██╔╝██║╚════██║".green);
console.log("███████║╚██████╔╝██║   ██║   ██║ ╚═╝ ██║███████║".green);
console.log("╚══════╝ ╚═════╝ ╚═╝   ╚═╝   ╚═╝     ╚═╝╚══════╝\n".green);
console.log("💻 CuitMe Network Pinger 💻\n".yellow.bold);

// Alamat yang ingin di-ping
const hosts = ['google.com', '8.8.8.8', 'github.com'];

async function pingHosts() {
    for (let host of hosts) {
        try {
            console.log(`Pinging ${host}...`);
            let res = await ping.promise.probe(host, { timeout: 2 });
            if (res.alive) {
                console.log(`✅ ${host} is reachable`.green.bold);
            } else {
                console.log(`❌ ${host} is unreachable`.red.underline);
            }
        } catch (error) {
            console.log(`⚠️ ${host} error: ${error.message}`.yellow.bgBlue);
        }
    }
}

// Fungsi untuk menjalankan ping terus menerus
function startPingLoop() {
    setInterval(() => {
        pingHosts();
    }, 5000); // Ping setiap 5 detik
}

// Fungsi main untuk menjalankan pingHosts tanpa henti
function main() {
    startPingLoop();
}

// Memanggil fungsi main untuk menjalankan program
main();
