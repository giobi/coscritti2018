---
layout: post
title: "Colloqui 9 Dicembre - Prenota il tuo slot"
date: 2025-11-26
category: Scuola
excerpt: "Prenota il colloquio genitori-insegnanti del 9 dicembre. Scegli la fascia oraria."
image: assets/images/colloqui-genitori.png
---

<style>
.colloqui-form-container {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin: 1.5rem 0;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #2d2416;
}

.form-group input[type="text"] {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 2px solid #e5e5e5;
    border-radius: 8px;
    font-family: 'Quicksand', sans-serif;
}

.form-group input[type="text"]:focus {
    outline: none;
    border-color: #e87d3e;
}

.btn-submit {
    width: 100%;
    padding: 0.9rem;
    background: #e87d3e;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Quicksand', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
}

.btn-submit:hover {
    background: #f4a261;
}

.btn-submit:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.message {
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
    display: none;
}

.message.success {
    background: #e8f5e9;
    color: #2e7d32;
    border: 1px solid #a5d6a7;
}

.message.error {
    background: #ffebee;
    color: #c62828;
    border: 1px solid #ef9a9a;
}

.message.show {
    display: block;
}

.loading {
    text-align: center;
    padding: 1rem;
    color: #666;
}

.info-box {
    background: #fef3e2;
    padding: 0.8rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    border-left: 4px solid #e87d3e;
}

/* Admin delete button */
.btn-delete {
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    font-size: 0.8rem;
}

.btn-delete:hover {
    background: #dc2626;
}

/* Tabella prenotazioni */
.prenotazioni-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    font-size: 0.95rem;
}

.prenotazioni-table th,
.prenotazioni-table td {
    padding: 0.6rem 0.8rem;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
}

.prenotazioni-table th {
    background: #f5f5f5;
    font-weight: 600;
    color: #2d2416;
}

.prenotazioni-table tr:hover {
    background: #faf8f5;
}

.prenotazioni-table tr.disponibile {
    cursor: pointer;
}

.prenotazioni-table tr.disponibile:hover {
    background: #fef3e2;
}

.prenotazioni-table tr.occupata {
    background: #ffebee;
}

.prenotazioni-table tr.occupata td {
    color: #666;
}

.prenotazioni-table tr.selected {
    background: #e87d3e !important;
    color: white;
}

.prenotazioni-table tr.selected td {
    color: white;
}

.status-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 0.5rem;
}

.status-dot.available {
    background: #4ade80;
}

.status-dot.taken {
    background: #ef4444;
}

.form-version {
    text-align: center;
    font-size: 0.75rem;
    color: #999;
    margin-top: 1rem;
    padding-top: 0.5rem;
    border-top: 1px solid #eee;
}
</style>

## Colloqui Genitori-Insegnanti

I **colloqui individuali** con le insegnanti sono previsti per **martedi 9 dicembre 2025**, dalle **15:00 alle 17:40**.

Ogni colloquio dura **8 minuti**. Seleziona la fascia oraria preferita inserendo il cognome del bambino.

---

<div class="colloqui-form-container">
    <div class="info-box">
        <i class="fas fa-info-circle"></i>
        <strong>Attenzione:</strong> Puoi prenotare una sola fascia per cognome. Per modifiche contatta il rappresentante di classe.
    </div>

    <form id="colloquiForm">
        <div class="form-group">
            <label for="cognome"><i class="fas fa-user"></i> Cognome dell'alunno</label>
            <input type="text" id="cognome" name="cognome" required placeholder="Es. Rossi">
        </div>

        <div class="form-group">
            <label><i class="fas fa-clock"></i> Seleziona la fascia oraria (clicca sulla riga)</label>
            <table class="prenotazioni-table" id="prenotazioniTable">
                <thead>
                    <tr>
                        <th style="width: 40%">Orario</th>
                        <th>Cognome</th>
                    </tr>
                </thead>
                <tbody id="fasceTableBody">
                    <tr><td colspan="2" class="loading"><i class="fas fa-spinner fa-spin"></i> Caricamento...</td></tr>
                </tbody>
            </table>
            <input type="hidden" id="selectedFascia" name="fascia">
        </div>

        <button type="submit" class="btn-submit" id="submitBtn">
            <i class="fas fa-check"></i> Conferma Prenotazione
        </button>
    </form>

    <div id="messageBox" class="message"></div>

    <div class="form-version">v7</div>
</div>

<script>
const API_URL = 'https://coscritti-colloqui-api.giobi.workers.dev';

// Check admin mode
const urlParams = new URLSearchParams(window.location.search);
const isAdmin = urlParams.get('command') === 'admin';

const FASCE = [
    '15.00-15.08', '15.08-15.16', '15.16-15.24', '15.24-15.32', '15.32-15.40',
    '15.40-15.48', '15.48-15.56', '15.56-16.04', '16.04-16.12', '16.12-16.20',
    '16.20-16.28', '16.28-16.36', '16.36-16.44', '16.44-16.52', '16.52-17.00',
    '17.00-17.08', '17.08-17.16', '17.16-17.24', '17.24-17.32', '17.32-17.40'
];

let disponibilita = {};
let selectedFascia = null;

async function loadDisponibilita() {
    try {
        const response = await fetch(`${API_URL}/disponibilita`);
        const data = await response.json();
        disponibilita = {};
        data.fasce.forEach(f => {
            disponibilita[f.fascia] = { prenotata: f.prenotata, cognome: f.cognome || null };
        });
        renderTable();
    } catch (error) {
        console.error('Errore:', error);
        document.getElementById('fasceTableBody').innerHTML = '<tr><td colspan="2" style="color:#c62828;">Errore nel caricamento. Riprova.</td></tr>';
    }
}

function renderTable() {
    const tbody = document.getElementById('fasceTableBody');
    tbody.innerHTML = '';

    FASCE.forEach((fascia) => {
        const info = disponibilita[fascia] || { prenotata: false, cognome: null };
        const tr = document.createElement('tr');

        if (info.prenotata) {
            tr.className = 'occupata';
            const deleteBtn = isAdmin ? `<button class="btn-delete" onclick="deletePrenotazione('${fascia}', '${info.cognome}')"><i class="fas fa-trash"></i></button>` : '';
            tr.innerHTML = `
                <td><span class="status-dot taken"></span>${fascia}</td>
                <td>${info.cognome || '-'} ${deleteBtn}</td>
            `;
        } else {
            tr.className = 'disponibile';
            tr.innerHTML = `
                <td><span class="status-dot available"></span>${fascia}</td>
                <td><em style="color:#999">Disponibile</em></td>
            `;
            tr.addEventListener('click', () => selectFascia(fascia, tr));
        }

        tbody.appendChild(tr);
    });
}

function selectFascia(fascia, row) {
    // Deselect previous
    document.querySelectorAll('.prenotazioni-table tr.selected').forEach(r => r.classList.remove('selected'));

    // Select new
    row.classList.add('selected');
    selectedFascia = fascia;
    document.getElementById('selectedFascia').value = fascia;
}

function showMessage(text, type) {
    const box = document.getElementById('messageBox');
    box.textContent = text;
    box.className = `message ${type} show`;
}

document.getElementById('colloquiForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const cognome = document.getElementById('cognome').value.trim().toUpperCase();

    if (!cognome) { showMessage('Inserisci il cognome', 'error'); return; }
    if (!selectedFascia) { showMessage('Seleziona una fascia oraria cliccando sulla riga', 'error'); return; }

    // Conferma prima di inviare
    if (!confirm(`Confermi la prenotazione?\n\nCognome: ${cognome}\nFascia: ${selectedFascia}`)) {
        return;
    }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Invio...';

    try {
        const response = await fetch(`${API_URL}/prenota`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cognome: cognome, fascia: selectedFascia })
        });
        const data = await response.json();

        if (data.success) {
            showMessage(`Prenotazione confermata per ${cognome} - Fascia: ${selectedFascia}`, 'success');
            selectedFascia = null;
            document.getElementById('selectedFascia').value = '';
            await loadDisponibilita();
            document.getElementById('cognome').value = '';
        } else {
            showMessage(data.error || 'Errore nella prenotazione', 'error');
        }
    } catch (error) {
        showMessage('Errore di connessione. Riprova.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Conferma Prenotazione';
    }
});

async function deletePrenotazione(fascia, cognome) {
    if (!confirm(`Eliminare la prenotazione di ${cognome} per ${fascia}?`)) return;

    try {
        const response = await fetch(`${API_URL}/elimina`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fascia: fascia, cognome: cognome })
        });
        const data = await response.json();

        if (data.success) {
            showMessage(`Prenotazione di ${cognome} eliminata`, 'success');
            await loadDisponibilita();
        } else {
            showMessage(data.error || 'Errore eliminazione', 'error');
        }
    } catch (error) {
        showMessage('Errore di connessione', 'error');
    }
}

document.addEventListener('DOMContentLoaded', loadDisponibilita);
</script>

---

### Cosa Portare

- Eventuali domande o dubbi sull'andamento scolastico
- Segnalazioni di situazioni particolari da discutere con le maestre

<footer class="post-footer">
    <div class="post-actions">
        <a href="{{ site.baseurl }}/blog.html" class="btn btn-outline"><i class="fas fa-arrow-left"></i> Torna al Blog</a>
    </div>
</footer>
