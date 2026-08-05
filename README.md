# Support Site

棕色與粉色的簡約應援網站首頁，使用 Blazor WebAssembly 製作。

## 本機執行

需要 [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)：

```bash
dotnet restore
dotnet run
```

依終端機顯示的網址在瀏覽器開啟。

## GitHub Pages

推送到 `main` 分支後，GitHub Actions 會自動建置並部署。第一次使用時，請到：

`Settings` → `Pages` → `Build and deployment` → `Source` → `GitHub Actions`

公開網址格式：

`https://411235030-rue.github.io/support-site/`

## 內容調整

- 首頁內容：`Pages/Home.razor`
- 顏色與版面：`wwwroot/css/app.css`
- 網站標題與描述：`wwwroot/index.html`

目前為首頁版型第一版，內容可再逐步替換。
