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

.fasce-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.fascia-option {
    position: relative;
}

.fascia-option input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.fascia-option label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    background: #f5f5f5;
    border: 2px solid #e5e5e5;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    text-align: center;
}

.fascia-option input[type="radio"]:checked + label {
    background: #e87d3e;
    color: white;
    border-color: #e87d3e;
}

.fascia-option input[type="radio"]:disabled + label {
    background: #ffebee;
    color: #c62828;
    border-color: #ef9a9a;
    cursor: not-allowed;
    text-decoration: line-through;
}

.fascia-option label:hover {
    border-color: #e87d3e;
}

.fascia-option input[type="radio"]:disabled + label:hover {
    border-color: #ef9a9a;
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

.legend {
    display: flex;
    gap: 1rem;
    margin: 0.5rem 0;
    font-size: 0.8rem;
    flex-wrap: wrap;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.legend-dot {
    width: 14px;
    height: 14px;
    border-radius: 4px;
}

.legend-dot.available {
    background: #f5f5f5;
    border: 2px solid #e5e5e5;
}

.legend-dot.selected {
    background: #e87d3e;
}

.legend-dot.taken {
    background: #ffebee;
    border: 2px solid #ef9a9a;
}

.info-box {
    background: #fef3e2;
    padding: 0.8rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    border-left: 4px solid #e87d3e;
}
</style>

## Colloqui Genitori-Insegnanti

I **colloqui individuali** con le insegnanti sono previsti per **martedi 9 dicembre 2025**, dalle **15:00 alle 17:40**.

Ogni colloquio dura **8 minuti**. Seleziona la fascia oraria preferita inserendo il cognome del bambino.

---

<div class="colloqui-form-container">
    <div class="info-box">
        <i class="fas fa-info-circle"></i>
        <strong>Attenzione:</strong> Ogni fascia puo essere prenotata da un solo genitore. Le fasce occupate appaiono barrate.
    </div>

    <form id="colloquiForm">
        <div class="form-group">
            <label for="cognome"><i class="fas fa-user"></i> Cognome dell'alunno</label>
            <input type="text" id="cognome" name="cognome" required placeholder="Es. Rossi">
        </div>

        <div class="form-group">
            <label><i class="fas fa-clock"></i> Fascia oraria</label>
            <div class="legend">
                <div class="legend-item"><span class="legend-dot available"></span> Disponibile</div>
                <div class="legend-item"><span class="legend-dot selected"></span> Selezionata</div>
                <div class="legend-item"><span class="legend-dot taken"></span> Occupata</div>
            </div>
            <div id="fasceContainer" class="fasce-container">
                <div class="loading"><i class="fas fa-spinner fa-spin"></i> Caricamento...</div>
            </div>
        </div>

        <button type="submit" class="btn-submit" id="submitBtn">
            <i class="fas fa-check"></i> Conferma Prenotazione
        </button>
    </form>

    <div id="messageBox" class="message"></div>
</div>

<script>
const API_URL = 'https://coscritti-colloqui-api.giobi.workers.dev';

const FASCE = [
    '15.00-15.08', '15.08-15.16', '15.16-15.24', '15.24-15.32', '15.32-15.40',
    '15.40-15.48', '15.48-15.56', '15.56-16.04', '16.04-16.12', '16.12-16.20',
    '16.20-16.28', '16.28-16.36', '16.36-16.44', '16.44-16.52', '16.52-17.00',
    '17.00-17.08', '17.08-17.16', '17.16-17.24', '17.24-17.32', '17.32-17.40'
];

let disponibilita = {};

async function loadDisponibilita() {
    try {
        const response = await fetch(`${API_URL}/disponibilita`);
        const data = await response.json();
        disponibilita = {};
        data.fasce.forEach(f => {
            disponibilita[f.fascia] = f.prenotata;
        });
        renderFasce();
    } catch (error) {
        console.error('Errore:', error);
        document.getElementById('fasceContainer').innerHTML = '<p style="color:#c62828;">Errore nel caricamento. Riprova.</p>';
    }
}

function renderFasce() {
    const container = document.getElementById('fasceContainer');
    container.innerHTML = '';
    FASCE.forEach((fascia, index) => {
        const isPrenotata = disponibilita[fascia];
        const div = document.createElement('div');
        div.className = 'fascia-option';
        div.innerHTML = `<input type="radio" id="fascia_${index}" name="fascia" value="${fascia}" ${isPrenotata ? 'disabled' : ''}><label for="fascia_${index}">${fascia}</label>`;
        container.appendChild(div);
    });
}

function showMessage(text, type) {
    const box = document.getElementById('messageBox');
    box.textContent = text;
    box.className = `message ${type} show`;
}

document.getElementById('colloquiForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const cognome = document.getElementById('cognome').value.trim();
    const selectedFascia = document.querySelector('input[name="fascia"]:checked');

    if (!cognome) { showMessage('Inserisci il cognome', 'error'); return; }
    if (!selectedFascia) { showMessage('Seleziona una fascia oraria', 'error'); return; }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Invio...';

    try {
        const response = await fetch(`${API_URL}/prenota`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cognome_alunno: cognome, fasce_selezionate: [selectedFascia.value] })
        });
        const data = await response.json();

        if (data.success) {
            showMessage(`Prenotazione confermata per ${cognome} - Fascia: ${selectedFascia.value}`, 'success');
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
