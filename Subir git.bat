@echo off

git checkout Kevin



git add .




for /f %%i in ('powershell -command "Get-Date -Format yyyy-MM-dd_HH:mm:ss"') do set fecha=%%i
git commit -m "Actualizacion automatica: %fecha% - %date% - %time% backend"
echo (Commit realizado con fecha y hora: %fecha% - %date% - %time%)

git push origin Kevin 
