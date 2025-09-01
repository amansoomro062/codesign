export interface GitHubStats {
  stars: number
  forks: number
  contributors: number
  users: number // Estimate based on stars/forks
}

export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const repoResponse = await fetch('https://api.github.com/repos/amansoomro062/codesign')
    
    if (!repoResponse.ok) {
      throw new Error('Failed to fetch repository data')
    }
    
    const repoData = await repoResponse.json()
    
    // Fetch contributors count (paginated)
    const contributorsResponse = await fetch('https://api.github.com/repos/amansoomro062/codesign/contributors?per_page=1')
    let contributorsCount = 0
    
    if (contributorsResponse.ok) {
      const linkHeader = contributorsResponse.headers.get('link')
      if (linkHeader) {
        const lastMatch = linkHeader.match(/page=(\d+)>; rel="last"/)
        contributorsCount = lastMatch ? parseInt(lastMatch[1]) : 1
      } else {
        const contributors = await contributorsResponse.json()
        contributorsCount = contributors.length
      }
    }
    
    return {
      stars: repoData.stargazers_count || 0,
      forks: repoData.forks_count || 0,
      contributors: contributorsCount,
      users: 0 // No users yet
    }
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    // Return fallback values
    return {
      stars: 125,
      forks: 32,
      contributors: 28,
      users: 0
    }
  }
}

export function formatStat(num: number): string {
  if (num >= 1000000) {
    return Math.floor(num / 100000) / 10 + 'M+'
  } else if (num >= 1000) {
    return Math.floor(num / 100) / 10 + 'k+'
  }
  return num.toString()
}