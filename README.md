<div align="right">
  <details>
    <summary >🌐 Language</summary>
    <div>
      <div align="right">
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=en">English</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=zh-CN">简体中文</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=zh-TW">繁體中文</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=ja">日本語</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=ko">한국어</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=hi">हिन्दी</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=th">ไทย</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=fr">Français</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=de">Deutsch</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=es">Español</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=it">Italiano</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=ru">Русский</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=pt">Português</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=nl">Nederlands</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=pl">Polski</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=ar">العربية</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=fa">فارسی</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=tr">Türkçe</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=vi">Tiếng Việt</a></p>
        <p><a href="https://openaitx.github.io/view.html?user=CodeWithCJ&project=Athleo&lang=id">Bahasa Indonesia</a></p>
      </div>
    </div>
  </details>
</div>

# Athleo

A self-hosted, privacy-first alternative to MyFitnessPal. Track nutrition, exercise, body metrics, and health data while keeping full control of your data.

![Screenshot](docs/public/web_screenshot.png)

Athleo is a self-hosted fitness tracking platform made up of:

- A backend server (API + data storage)
- A web-based frontend
- Native mobile apps for iOS and Android

It stores and manages health data on infrastructure you control, without relying on third party services.

## Core Features

- Nutrition, exercise, hydration, sleep, fasting, mood and body measurement tracking
- Goal setting and daily check-ins
- Interactive charts and long-term reports
- Multiple user profiles and family access
- Light and dark themes
- OIDC, TOTP, Passkey, MFA etc.

## Health & Device Integrations

Athleo can sync data from multiple health and fitness platforms:

- **Apple Health** (iOS)
- **Google Health Connect** (Android)
- **Fitbit**
- **Garmin Connect**
- **Withings**
- **Polar Flow** (partially tested)
- **Hevy** (not tested)
- **OpenFoodFacts**
- **USDA**
- **Fatsecret**
- **Nutritioninx**
- **Mealie**
- **Tandori**

Integrations automatically sync activity data such as steps, workouts, and sleep, along with health metrics like weight and body measurements, to your Athleo server.

## Optional AI Features (Beta)

SparkyAI provides a conversational interface for logging data and reviewing progress.

- Log food, exercise, body stats, and steps via chat
- Upload food images for automatic meal logging
- Retains conversation history for follow ups

Note: AI features are currently in beta.

## Quick Start (Server)

Get a Athleo server running in minutes using Docker Compose.

```bash
# 1. Create a new folder
mkdir athleo && cd athleo

# 2. Download Docker files only
curl -L -o docker-compose.yml https://github.com/CodeWithCJ/SparkyFitness/releases/latest/download/docker-compose.prod.yml
curl -L -o .env https://github.com/CodeWithCJ/SparkyFitness/releases/latest/download/default.env.example

# 3. (Optional) Edit .env to customize database credentials, ports, etc.

# 4. Start the app
docker compose pull && docker compose up -d

# Access application at http://localhost:8080
```


## 🎥 Video Tutorial

[![Watch the video](https://img.youtube.com/vi/B13IiL2DeQc/maxresdefault.jpg)](https://www.youtube.com/watch?v=B13IiL2DeQc)

Quick 2-minute tutorial showing how to install Athleo (self-hosted fitness tracker).


## Documentation

For full installation guides, configuration options, and development docs, please visit our [Documentation Site](https://codewithcj.github.io/Athleo/).

### Quick Links

- **[Installation Guide](https://codewithcj.github.io/Athleo/install/docker-compose)** - Deployment and configurations
- **[Features Overview](https://codewithcj.github.io/Athleo/features)** - Complete feature documentation
- **[Development Workflow](https://codewithcj.github.io/Athleo/developer/getting-started)** - Developer guide and contribution process
- **[iOS App Info](https://github.com/CodeWithCJ/SparkyFitness/wiki/Apple-Health-Integration)** and **[Android App Info](https://github.com/CodeWithCJ/SparkyFitness/wiki/Android-Mobile-App)**

### Need Help?

- Post in Github issues/discussion.
- For faster response and get help from other community memebers **[Join our Discord](https://discord.gg/vcnMT5cPEA)**

## Star History

<a href="https://star-history.com/#CodeWithCJ/SparkyFitness&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=CodeWithCJ/SparkyFitness&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=CodeWithCJ/SparkyFitness&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=CodeWithCJ/SparkyFitness&type=Date" width="100%" />
  </picture>
</a>

## Translations

**[Weblate Translations](https://hosted.weblate.org/engage/athleo)**

<a href="https://hosted.weblate.org/engage/athleo/">
<img src="https://hosted.weblate.org/widget/athleo/athleo-translations/multi-auto.svg" alt="Translation status" />
</a>

## Repository activity

![Alt](https://repobeats.axiom.co/api/embed/828203d3070ff56c8873c727b6873b684c4ed399.svg "Repobeats analytics image")

## Contributors

<a href="https://github.com/CodeWithCJ/SparkyFitness/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=CodeWithCJ/SparkyFitness" width="100%"/>
</a>

## ⚠️ Known Issues / Beta Features ⚠️

Athleo is under active development.
Breaking changes may occur between releases.

- Auto-updating containers is not recommended
- Always review release notes before upgrading

The following features are currently in beta and may not have been thoroughly tested. Expect potential bugs or incomplete functionality:

- AI Chatbot
- Family & Friends access
- API documentation
