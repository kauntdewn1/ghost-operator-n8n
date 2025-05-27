#!/bin/bash
echo "Exportando workflows do n8n remoto (requer auth)..."
curl -u admin:senhaforte https://mello-dominacao.up.railway.app/rest/workflows > workflows/exported.json
