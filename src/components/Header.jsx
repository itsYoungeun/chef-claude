import chefClaudeLogo from "/images/chef-claude-icon.png"

export default function Header() {
    return (
        <main className="header-main">
            <header className="flex items-center justify-center bg-white gap-3 h-20 shadow">
                <img className="w-10" src={chefClaudeLogo} />
                <h1 className="font-med text-3xl font">Chef Claude</h1>
            </header>
        </main>
    )
}